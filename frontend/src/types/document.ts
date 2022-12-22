import { Genre } from './genre';

export type Document = {
  id: number;
  title: string;
  author: string;
  year: number;
  body: string;
};

export type DocumentData = { breadcrumb: Genre[]; document: Document };
