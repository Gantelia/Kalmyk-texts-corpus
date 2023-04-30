import { useAppSelector } from '../../hooks';
import { RenderType } from '../../const';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Cards from '../cards/cards';
import Table from '../table/table';
import Loader from '../loader/loader';
import { checkTableType, getCardsType, getTableType } from './hierarchy-utils';
import './hierarchy.scss';
import NoResult from '../no-result/no-result';

function Hierarchy() {
  const { hierarchy } = useAppSelector(
    ({ GENRE_STRUCTURE }) => GENRE_STRUCTURE
  );

  const isCardList = hierarchy && hierarchy.renderType === RenderType.Cards;
  const isTable = hierarchy && hierarchy.renderType === RenderType.Table;
  const isTableEmpty = isTable && !hierarchy!.items.length;

  return (
    <section className="hierarchy">
      <h2 className="title">Иерархическая структура жанров</h2>
      <Breadcrumb />
      {isCardList && <Cards cards={getCardsType(hierarchy?.items || [])} />}
      {isTable && !!hierarchy!.items.length && (
        <Table
          heading={'Список произведений'}
          creations={getTableType(hierarchy!.items) || []}
          pageCount={checkTableType(hierarchy!)?.pages || 0}
          section={'hierarchy'}
        />
      )}
      {isTableEmpty && <NoResult />}
      {!hierarchy && <Loader />}
    </section>
  );
}

export default Hierarchy;
