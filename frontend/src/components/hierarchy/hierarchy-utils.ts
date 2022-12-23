import { RenderType } from '../../const';
import { CardItem, Cards } from '../../types/cards';
import { Breadcrumb, Hierarchy } from '../../types/hierarchy';
import { Table, TableItem } from '../../types/table';

export const isConditionMet = (
  isMainPage: boolean,
  data: Hierarchy | null,
  renderType: RenderType
): boolean => {
  if (isMainPage && data && data?.renderType === renderType) {
    return true;
  }
  return false;
};

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
