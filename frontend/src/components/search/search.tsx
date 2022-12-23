import { useAppSelector } from '../../hooks';
import Form from '../form/form';
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
          />
        )}
        {searchResult && !searchResult.items.length && (
          <p className="table__empty">Ничего не найдено</p>
        )}
      </div>
    </section>
  );
}

export default Search;
