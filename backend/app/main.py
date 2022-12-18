from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import DATABASE_STRING, query_genres, query_authors
from corp_xal import CorporaXal
import json

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


@app.get("/menu")
async def read_menu():
    return {"response": get_menu()}


@app.get("/data/")
async def read_data(g_id: Union[int, None] = None, page: Union[str, None] = None):
    return {"response": get_data(g_id, page)}


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

def get_document(text_id):
    corp = CorporaXal()
    corp.connect(dsn=DATABASE_STRING)
    document = corp.get_text(t_id=text_id)
    parents = corp.get_parents(genre=document['genre'])
    corp.close_conn()
    doc = dict(breadcrumbs=parents, document=document)
    return doc
