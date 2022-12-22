import { useAppSelector } from '../../hooks';
import Form from '../form/form';
import Table from '../table/table';
import './search.scss';

function Search() {
  const { searchResult } = useAppSelector((store) => store);
  const { pages, items } = searchResult;

  return (
    <section className="search">
      <h2 className="title">Поиск</h2>
      <Form />
      <div className="search__container">
        <Table
          heading={'Результаты поиска'}
          className={'title'}
          creations={items}
          pageCount={pages}
        />
      </div>
    </section>
  );
}

export default Search;
