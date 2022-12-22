import { useAppSelector } from '../../hooks';
import { usePathCheck } from '../../hooks/use-path-check';

import { RenderType } from '../../const';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Text from '../text/text';
import Cards from '../cards/cards';
import {
  checkTableType,
  getCardsType,
  getTableType
} from '../breadcrumb/breadcrumb-utils';
import Table from '../table/table';
import './genre-structure.scss';

function GenreStructure() {
  const { hierarchy } = useAppSelector((state) => state);

  const isMainPage = usePathCheck();

  return (
    <section className="genre-structure">
      <h2 className="title">Иерархическая структура жанров</h2>
      <Breadcrumb />
      {isMainPage && hierarchy.renderType === RenderType.Cards && (
        <Cards cards={getCardsType(hierarchy.items)} />
      )}
      {isMainPage && hierarchy.renderType === RenderType.Table && (
        <Table
          heading={'Список произведений'}
          creations={getTableType(hierarchy.items)}
          pageCount={checkTableType(hierarchy)?.pages || 0}
        />
      )}
      {!isMainPage && <Text />}
    </section>
  );
}

export default GenreStructure;
