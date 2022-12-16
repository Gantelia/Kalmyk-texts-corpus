import { useState } from 'react';
import { LiteratureTable } from '../../mocks/mocks';
import Form from '../form/form';
import Table from '../table/table';
import './search.scss';

function Search() {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <section className="search">
      <h2 className="title">Поиск</h2>
      <Form />
      <div className="search__container">
        <Table
          heading={'Результаты поиска'}
          className={'title'}
          creations={LiteratureTable.items}
          pageCount={10}
          currentPage={page}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default Search;
