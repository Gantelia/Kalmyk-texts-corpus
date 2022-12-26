import { Cards } from './cards';
import { Genre } from './genre';
import { Table } from './table';

export type Breadcrumb = {
  breadcrumb: Genre[];
};

export type ServerBreadcrumb = {
  g_id: number;
  g_short_name: string;
  g_hierarchy: string;
  g_full_name: string;
};

export type Hierarchy = Breadcrumb & (Cards | Table);
