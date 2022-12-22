import { RenderType } from '../const';

export type TableItem = {
  id: number;
  author: string | null;
  title: string;
  year: number | null;
};

export type Table = {
  renderType: RenderType;
  pages: number;
  items: TableItem[];
};
