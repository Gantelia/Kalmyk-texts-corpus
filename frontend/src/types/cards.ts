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
