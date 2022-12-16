import { RenderStyle } from '../const';

export type TableItem = {
  id: number;
  title: string;
  author: string | null;
  year: number | null;
};

export type LiteratureTable = {
  renderStyle: RenderStyle;
  page: 1;
  items: TableItem[];
};
