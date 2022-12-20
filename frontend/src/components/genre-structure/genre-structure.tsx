import { useState } from 'react';
import { usePathCheck } from '../../hooks/use-path-check';

import { LiteratureCards, LiteratureTable } from '../../mocks/mocks';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Cards from '../cards/cards';
import Table from '../table/table';
import Text from '../text/text';

function GenreStructure() {
  const [page, setPage] = useState(1);

  const isMainPage = usePathCheck();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <section className="genre-structure">
      <h2 className="title genre-structure__title">
        Иерархическая структура жанров
      </h2>
      <Breadcrumb />
      {isMainPage && <Cards cards={LiteratureCards.items} />}
      {isMainPage && (
        <Table
          heading={'Список произведений'}
          className={'table__caption'}
          creations={LiteratureTable.items}
          pageCount={10}
          currentPage={page}
          onChange={handleChange}
        />
      )}
      {!isMainPage && <Text />}
    </section>
  );
}

export default GenreStructure;
