import { useState } from 'react';

import { LiteratureCards, LiteratureTable } from '../../mocks/mocks';
import Document from '../../components/document/document';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Cards from '../cards/cards';
import Table from '../table/table';

function GenreStructure() {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <section className="genre-structure">
      <h2 className="title genre-structure__title">
        Иерархическая структура жанров
      </h2>
      <Breadcrumb />
      <Cards cards={LiteratureCards.items} />
      <Table
        heading={'Список произведений'}
        className={'table__caption'}
        creations={LiteratureTable.items}
        pageCount={10}
        currentPage={page}
        onChange={handleChange}
      />
      <Document />
    </section>
  );
}

export default GenreStructure;
