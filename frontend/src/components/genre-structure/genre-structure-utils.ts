import { CardItem, Cards } from '../../types/cards';
import { Genre } from '../../types/genre';
import { Breadcrumb } from '../../types/hierarchy';
import { Table, TableItem } from '../../types/table';

export const getCardsType = (items: CardItem[] | TableItem[]) => {
  return (items[0] as CardItem).picture !== undefined
    ? (items as CardItem[])
    : [];
};

export const getTableType = (items: CardItem[] | TableItem[]) => {
  if (!items.length) {
    return [];
  }
  return (items[0] as TableItem).year !== undefined
    ? (items as TableItem[])
    : [];
};

export const checkTableType = (
  hierarchy: (Breadcrumb & Cards) | Table
): (Breadcrumb & Table) | null => {
  return (hierarchy as Breadcrumb & Table).pages !== undefined
    ? (hierarchy as Breadcrumb & Table)
    : null;
};

export const sortItems = (genres: Genre[]) => {
  if (!genres || !genres.length) {
    return [];
  }
  return [...genres].sort(compareIds);
};

const compareIds = (a: Genre, b: Genre) => {
  if (a.id < b.id) {
    return -1;
  }
  if (b.id < a.id) {
    return 1;
  }
  return 0;
};
