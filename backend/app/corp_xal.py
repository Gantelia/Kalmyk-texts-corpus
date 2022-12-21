import psycopg2
from psycopg2.extras import RealDictCursor


class CorporaXal:

    def __init__(self):
        self.cursor = None
        self.connection = None

    def connect(self, dsn):
        """ подключение к БД """
        try:
            self.connection = psycopg2.connect(dsn)
            self.cursor = self.connection.cursor(cursor_factory=RealDictCursor)

        except Exception as e:
            print(f"Failed to connect: {e}")

    def select_version(self):
        """ запрос версии бд """
        self.cursor.execute("SELECT VERSION();")
        result = self.cursor.fetchone()
        print(result)
        return result

    def get_authors(self, q_authors):
        """ запрос авторов """
        self.cursor.execute(q_authors)
        authors = self.cursor.fetchall()
        return authors

    def get_hierarchy(self, g_query):
        """ запрос древа жанров"""
        self.cursor.execute(g_query)
        result = self.cursor.fetchall()
        return result

    def get_level(self, g_id):
        self.cursor.execute(f"SELECT g_hierarchy FROM public.corp_genres WHERE g_id = {g_id};")
        start_item = self.cursor.fetchall()
        entry_point = start_item[0]['g_hierarchy']
        return entry_point

    def get_parents(self, genre):
        query_parents = f"SELECT g_id, "\
                        f"g_short_name, "\
                        f"g_hierarchy, "\
                        f"g_full_name "\
                        f"FROM public.corp_genres "\
                        f"WHERE g_hierarchy @> "\
                        f"(SELECT g_hierarchy "\
                        f"FROM corp_genres "\
                        f"WHERE g_id = {genre});"
        self.cursor.execute(query_parents)
        parents = self.cursor.fetchall()
        return parents

    def get_children(self, genres):
        query2 = f"SELECT g_id, " \
                 f"g_short_name, " \
                 f"g_picture, " \
                 f"g_full_name " \
                 f"FROM public.corp_genres " \
                 f"WHERE g_hierarchy " \
                 f"~ '*.{genres}@.*{{1}}';"
        self.cursor.execute(query2)
        children = self.cursor.fetchall()
        return children

    def get_texts_list(self, genre, p_num):
        if not p_num:
            p_num = 0
        a = 20  # количество на странице
        offset = p_num * a
        query_texts = f"SELECT text_id, " \
                      f"author, " \
                      f"text_title, " \
                      f"pub_year " \
                      f"FROM corp_texts " \
                      f"WHERE genre = {genre} " \
                      f"OFFSET {offset};"
        self.cursor.execute(query_texts)
        t = self.cursor.fetchall()
        texts_count = self.cursor.rowcount
        pages = texts_count // a
        return {"texts_count": texts_count, "pages": pages, "table": t}

    def get_text(self, t_id):
        query_text = f"""SELECT text_id, author, genre, text_title, pub_year, text_body
                         FROM corp_texts
                         WHERE text_id = {t_id};"""
        self.cursor.execute(query_text)
        text = self.cursor.fetchone()
        return text

    def get_search(self, g_list, word, p_num):
        if not p_num:
            p_num = 0
        a = 20
        search_query = f"""SELECT text_id, author, text_title, genre, pub_year
                           FROM corp_texts
                           WHERE corp_texts.text_body @@ to_tsquery('kalmyk', '{word}') AND genre in ({g_list}) 
                           OFFSET {p_num};"""
        self.cursor.execute(search_query)
        search_result = self.cursor.fetchall()
        result_count = self.cursor.rowcount
        pages = result_count // a
        return {"result_count": result_count, "pages": pages, "RenderType": "table", "table": search_result}

    def get_children_by_id(self, g_id):
        query_child = f"""SELECT g_id
                          FROM corp_genres c
                          WHERE g_hierarchy ~
                              (select (cn.g_hierarchy::varchar || '.*')::lquery from corp_genres cn 
                              where cn.g_id = {g_id})
                          and not exists
                            (select 1 from corp_genres cc where cc.g_hierarchy ~ 
                            (c.g_hierarchy::varchar || '.*{{1}}')::lquery);"""
        self.cursor.execute(query_child)
        g_items = self.cursor.fetchall()
        map_iterator = map(lambda x: (x['g_id']), g_items)
        return map_iterator

    def get_search_authors(self, authors, word, p):
        a = 20
        search_query = f"""SELECT text_id, author, text_title, genre, pub_year
                           FROM corp_texts
                           WHERE corp_texts.text_body @@ to_tsquery('kalmyk', '{word}') AND author in ({authors}) 
                           ORDER BY author DESC OFFSET {p};"""
        self.cursor.execute(search_query)
        search_result = self.cursor.fetchall()
        result_count = self.cursor.rowcount
        pages = result_count // a
        return {"result_count": result_count, "pages": pages, "RenderType": "table", "table": search_result}

    def close_conn(self):
        self.cursor.close()
        self.connection.close()
