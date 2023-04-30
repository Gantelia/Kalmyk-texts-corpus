import { BACKEND_PAGE_COUNT_SHIFT } from '../../const';
import { ServerCard } from '../../types/cards';
import { DocumentData } from '../../types/document';
import { Genre, SearchMenu } from '../../types/genre';
import {
  Hierarchy,
  HierarchyParams,
  ServerBreadcrumb
} from '../../types/hierarchy';
import { SearchParams } from '../../types/search';
import { Table } from '../../types/table';

export const adaptBreadcrumb = (breadcrumbs: ServerBreadcrumb[]) =>
  breadcrumbs.map((breadcrumb: ServerBreadcrumb) => ({
    id: breadcrumb.g_id,
    genre: breadcrumb.g_short_name
  }));

export const adaptMenuToClient = (
  menu: SearchMenu
): { genres: Genre[]; authors: string[] } => {
  const { genres, authors } = menu.response;
  return {
    genres: genres.map((item) => ({ id: item.g_id, genre: item.g_short_name })),
    authors: authors
  };
};

export const adaptResultToClient = (result: any): Table => {
  const { pages, RenderType, table } = result;
  return {
    renderType: RenderType,
    pages: pages + BACKEND_PAGE_COUNT_SHIFT,
    items: table.length
      ? table.map((item: any) => ({
          id: item.text_id,
          author: item.author,
          title: item.text_title,
          year: item.pub_year
        }))
      : []
  };
};

export const turnSearchParamsIntoString = (params: SearchParams): string => {
  let requestParams = '';

  const { genres, authors, words, page } = params;
  if (genres) {
    requestParams = `?genres=${genres}&words=${words}`;
  }
  if (authors) {
    requestParams = `?authors=${authors}&words=${words}`;
  }
  if (page >= 0) {
    requestParams = `${requestParams}&page=${page}`;
  }

  return requestParams;
};

export const adaptDocumentToClient = (documentData: any) => {
  const { breadcrumbs, document } = documentData;
  return {
    breadcrumb: adaptBreadcrumb(breadcrumbs),
    document: {
      id: document.text_id,
      title: document.text_title,
      author: document.author,
      year: document.pub_year,
      body: document.text_body
    }
  } as DocumentData;
};

export const adaptHierarchyToClient = (hierarchy: any): Hierarchy => {
  if ('children' in hierarchy) {
    const { breadcrumbs, RenderType, children } = hierarchy;
    return {
      breadcrumb: adaptBreadcrumb(breadcrumbs),
      renderType: RenderType,
      items: children.map((item: ServerCard) => ({
        id: item.g_id,
        title: item.g_short_name,
        picture: item.g_picture
      }))
    } as Hierarchy;
  }
  const { breadcrumbs, RenderType, table } = hierarchy;
  return {
    breadcrumb: adaptBreadcrumb(breadcrumbs),
    renderType: RenderType,
    pages: table.pages,
    items: table.table.map((item: any) => ({
      id: item.text_id,
      author: item.author,
      title: item.text_title,
      year: item.pub_year
    }))
  };
};

export const turnHierarchyParamsIntoString = (
  params: HierarchyParams
): string => {
  const { genre, page } = params;

  let hierarchyParams = `?g_id=${genre}`;

  if (page >= 0) {
    hierarchyParams = `${hierarchyParams}&page=${page}`;
  }

  return hierarchyParams;
};
