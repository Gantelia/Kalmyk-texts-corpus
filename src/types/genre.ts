export type Genre = {
  id: number;
  genre: string;
};

export type ServerGenre = {
  g_id: number;
  g_hierarchy: string;
  g_short_name: string;
};

export type SearchMenu = {
  response: {
    genres: ServerGenre[];
    authors: string[];
  };
};
