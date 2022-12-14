import { RenderStyle } from '../const';

export type TableItem = {
  id: number;
  title: string;
  author: string;
  year: number;
};

export type LiteratureTable = {
  renderStyle: RenderStyle;
  page: 1;
  items: TableItem[];
};
