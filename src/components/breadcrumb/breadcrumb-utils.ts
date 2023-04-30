import { Genre } from '../../types/genre';

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
