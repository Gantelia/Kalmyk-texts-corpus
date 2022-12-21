import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { usePathCheck } from '../../hooks/use-path-check';

import { RenderType } from '../../const';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Cards from '../cards/cards';
import Text from '../text/text';

function GenreStructure() {
  const [page, setPage] = useState(1);

  const { hierarchy } = useAppSelector((state) => state);

  const isMainPage = usePathCheck();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  return (
    <section className="genre-structure">
      <h2 className="title">Иерархическая структура жанров</h2>
      <Breadcrumb />
      {isMainPage && hierarchy.renderType === RenderType.Cards && (
        <Cards cards={hierarchy.items} />
      )}
      {!isMainPage && <Text />}
    </section>
  );
}

export default GenreStructure;
