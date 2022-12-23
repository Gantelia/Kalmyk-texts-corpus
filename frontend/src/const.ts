export enum AppRoute {
  Main = '/',
  About = '/about',
  AddText = '/addText',
  Document = '/document/:id',
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

export const NARROW_LIST_CARD_COUNT = 4;

export const NO_PAGINATION_PAGE_COUNT = 1;

export enum APIRoute {
  SearchMenu = '/menu',
  Search = '/search',
  Hierarchy = '/data',
  Document = '/document',
  AddText = '/add_text'
}
