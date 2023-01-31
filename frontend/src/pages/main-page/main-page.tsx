import Hierarchy from '../../components/hierarchy/hierarchy';
import Search from '../../components/search/search';

function MainPage() {
  return (
    <main className="main main--index">
      <div className="main__wrapper">
        <h1 className="visually-hidden">Корпус текстов калмыцкого языка</h1>
        <Search />
        <Hierarchy />
      </div>
    </main>
  );
}

export default MainPage;
