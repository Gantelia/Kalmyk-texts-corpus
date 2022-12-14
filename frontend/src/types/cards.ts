import { RenderStyle } from '../const';

export type CardItem = {
  id: number;
  title: string;
  picture: string;
};

export type LiteratureCards = {
  renderStyle: RenderStyle;
  items: CardItem[];
};
