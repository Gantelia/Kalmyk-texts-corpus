import { RenderType } from '../const';

export type TableItem = {
  id: number;
  title: string;
  author: string | null;
  year: number | null;
};

export type Table = {
  renderType: RenderType;
  page: number;
  items: TableItem[];
};
