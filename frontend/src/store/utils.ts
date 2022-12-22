export const adaptBreadcrumb = (breadcrumbs: any) =>
  breadcrumbs.map((breadcrumb: any) => ({
    id: breadcrumb.g_id,
    genre: breadcrumb.g_short_name
  }));
