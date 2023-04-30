import { RenderType } from '../const';

export type CardItem = {
  id: number;
  title: string;
  picture: string;
};

export type Cards = {
  renderType: RenderType;
  items: CardItem[];
};

export type ServerCard = {
  g_id: number;
  g_short_name: string;
  g_picture: string;
  g_full_name: string;
};
