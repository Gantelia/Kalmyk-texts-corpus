export const NARROW_LIST_CARD_COUNT = 4;

export const NO_PAGINATION_PAGE_COUNT = 1;

export const TIMEOUT_SHOW_ERROR = 3000;

export const BACKEND_PAGE_COUNT_SHIFT = 1;

export const ALL_GENRES_ID = 0;

export const FIRST_PAGE = 1;

export enum AppRoute {
  Main = '/',
  About = '/about/',
  AddText = '/addText/',
  Document = '/document/:id/',
  NotFound = '*'
}

export enum SelectType {
  Genres = 'genres',
  Authors = 'authors',
  Default = ''
}

export enum RenderType {
  Cards = 'cards',
  Table = 'table'
}

export enum APIRoute {
  SearchMenu = '/menu/',
  Search = '/search/',
  Hierarchy = '/data/',
  Document = '/document/',
  AddText = '/add_text/'
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  NOT_FOUND = 404
}
