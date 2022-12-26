import { ServerBreadcrumb } from '../types/hierarchy';

export const adaptBreadcrumb = (breadcrumbs: ServerBreadcrumb[]) =>
  breadcrumbs.map((breadcrumb: ServerBreadcrumb) => ({
    id: breadcrumb.g_id,
    genre: breadcrumb.g_short_name
  }));
