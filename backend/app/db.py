import json

with open("db.json") as f:
    params = json.load(f)
    conn_info = params.get("db_cred")

DATABASE_STRING = \
    f'postgresql://{conn_info["user"]}:'\
    f'{conn_info["password"]}@'\
    f'{conn_info["host"]}:'\
    f'{conn_info["port"]}/'\
    f'{conn_info["database"]}'

query = """SELECT g_id, 
                  g_hierarchy, 
                  g_short_name, 
                  g_picture, 
                  g_full_name 
           FROM public.corp_genres cr WHERE g_hierarchy ~ '*.%s@.*{1}';"""

query_genres = """
            SELECT g_id, 
                   g_hierarchy, 
                   g_short_name 
            FROM public.corp_genres cg 
            WHERE g_hierarchy <@ 'Жанры' ORDER BY g_id;
"""

query_authors = "SELECT DISTINCT author FROM corp_texts WHERE author IS NOT NULL;"
