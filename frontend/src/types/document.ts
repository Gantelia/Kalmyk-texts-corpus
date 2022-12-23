import { Genre } from './genre';

export type Document = {
  id: number;
  title: string;
  author: string;
  year: number;
  body: string;
};

export type DocumentData = { breadcrumb: Genre[]; document: Document };

export type UserText = {
  author: string;
  text_title: string;
  pub_year: number;
  genre: string;
  text_body: string;
};
