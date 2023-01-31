import { useAppSelector } from '../../hooks';
import Form from '../form/form';
import NoResult from '../no-result/no-result';
import Table from '../table/table';
import './search.scss';

function Search() {
  const { searchResult } = useAppSelector((store) => store);

  return (
    <section className="search">
      <h2 className="title">Поиск</h2>
      <Form />
      <div className="search__container">
        {searchResult && !!searchResult.items.length && (
          <Table
            heading={'Результаты поиска'}
            creations={searchResult.items}
            pageCount={searchResult.pages}
            section={'search'}
          />
        )}
        {searchResult && !searchResult.items.length && <NoResult />}
      </div>
    </section>
  );
}

export default Search;
