import GenreStructure from '../../components/genre-structure/genre-structure';
import Search from '../../components/search/search';

function Document() {
  return (
    <main className="main">
      <h1 className="visually-hidden">Документ</h1>
      <Search />
      <GenreStructure />
    </main>
  );
}

export default Document;
