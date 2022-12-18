import { RenderType } from '../const';

export type TableItem = {
  id: number;
  title: string;
  author: string | null;
  year: number | null;
};

export type LiteratureTable = {
  renderStyle: RenderType;
  page: 1;
  items: TableItem[];
};
