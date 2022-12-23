import Hierarchy from '../../components/hierarchy/hierarchy';
import Search from '../../components/search/search';

function Document() {
  return (
    <main className="main">
      <h1 className="visually-hidden">Документ</h1>
      <Search />
      <Hierarchy />
    </main>
  );
}

export default Document;
