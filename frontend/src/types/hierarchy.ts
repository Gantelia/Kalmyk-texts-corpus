import { Cards } from './cards';
import { Genre } from './genre';
import { Table } from './table';

export type Breadcrumb = {
  breadcrumb: Genre[];
};

export type Hierarchy = Breadcrumb & (Cards | Table);
