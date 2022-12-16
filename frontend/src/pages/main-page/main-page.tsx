import GenreStructure from '../../components/genre-structure/genre-structure';
import Search from '../../components/search/search';

import './main-page.scss';

function MainPage() {
  return (
    <main className="main main--index">
      <h1 className="visually-hidden">Корпус текстов калмыцкого языка</h1>
      <Search />
      <GenreStructure />
    </main>
  );
}

export default MainPage;
