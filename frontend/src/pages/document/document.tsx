import Hierarchy from '../../components/hierarchy/hierarchy';
import Search from '../../components/search/search';

function Document() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <h1 className="visually-hidden">Документ</h1>
        <Search />
        <Hierarchy />
      </div>
    </main>
  );
}

export default Document;
