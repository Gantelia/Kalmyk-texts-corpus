from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import DATABASE_STRING, query_genres, query_authors
from corp_xal import CorporaXal
from pydantic import BaseModel

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "Nomin Tech!"}


@app.get("/menu/")
async def read_menu():
    return {"response": get_menu()}


@app.get("/data/")
async def read_data(g_id: Union[int, None] = None, page: Union[int, None] = None):
    return {"response": get_data(g_id, page)}

@app.get("/search/")
async def read_authors_and_genres(genres: Union[str, None] = None,
                                  authors: Union[str, None] = None,
                                  words: Union[str, None] = None,
                                  page: Union[int, None] = None):
    if genres:
        return {"response": search_data_genres(genres, words, page)}
    if authors:
        return {"response": search_data_authors(authors, words, page)}

class Text(BaseModel):
    author: Union[str, None] = None
    text_title: str
    pub_year: Union[int, None] = None
    genre: str
    text_body: str

@app.post("/add_text/")
async def add_text(text: Text):
    text_dic = text.dict()
    insert_document(data_dic=text_dic)
    return {"message": "Документ добавлен"}


@app.get("/document/{text_id}")
async def read_document(text_id):
    return {"response": get_document(text_id)}


def get_menu():
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    items = corp.get_hierarchy(query_genres)
    authors = corp.get_authors(query_authors)
    a = [x for x in authors for x in x.values()]
    corp.close_conn()
    menu = dict(genres=items, authors=a)
    print(menu)
    return menu


def get_data(g_id, page):
    if not g_id:
        g_id = 0
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    g = corp.get_level(g_id)
    parents = corp.get_parents(genre=g_id)
    children = corp.get_children(genres=g)
    output = dict(breadcrumbs=parents)
    if children:
        output['RenderType'] = "cards"
        output['children'] = children
    else:
        output['RenderType'] = "table"
        texts = corp.get_texts_list(genre=g_id, p_num=page)
        output['table'] = texts
    corp.close_conn()
    print(output)
    return output

def search_data_genres(genres, words, page):
    if not page:
        page = 0
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    a = list(map(str.strip, genres.split(',')))
    searchable_list = []
    for i in a:
        g = corp.get_children_by_id(g_id=i)
        searchable_list.extend(g)
    no_dups = set(searchable_list)
    searchable_jenres = ', '.join("'" + str(item) + "'" for item in no_dups)
    print(searchable_jenres)
    report = corp.get_search(g_list=searchable_jenres, word=words, p_num=page)
    return report


def search_data_authors(authors, words, page):
    if not page:
        page = 0
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    a = list(map(str.strip, authors.split(',')))
    searchable_authors = ', '.join("'" + item + "'" for item in a)
    report = corp.get_search_authors(authors=searchable_authors, word=words, p=page)
    return report


def get_document(text_id):
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    document = corp.get_text(t_id=text_id)
    parents = corp.get_parents(genre=document['genre'])
    corp.close_conn()
    doc = dict(breadcrumbs=parents, RenderType="text", document=document)
    return doc


def insert_document(data_dic):
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    corp.insert_text(data=data_dic)
    return True


