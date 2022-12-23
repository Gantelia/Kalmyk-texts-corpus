import { useAppSelector } from '../../hooks';
import { usePathCheck } from '../../hooks/use-path-check';
import { RenderType } from '../../const';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Text from '../text/text';
import Cards from '../cards/cards';
import Table from '../table/table';
import Loader from '../loader/loader';
import {
  checkTableType,
  getCardsType,
  getTableType,
  isConditionMet
} from './hierarchy-utils';
import './hierarchy.scss';

function Hierarchy() {
  const { hierarchy } = useAppSelector((state) => state);

  const isMainPage = usePathCheck();
  const isCardList = isConditionMet(isMainPage, hierarchy, RenderType.Cards);
  const isTable = isConditionMet(isMainPage, hierarchy, RenderType.Table);
  const isTableEmpty = isTable && !hierarchy!.items.length;

  return (
    <section className="genre-structure">
      <h2 className="title">Иерархическая структура жанров</h2>
      <Breadcrumb />
      {isCardList && <Cards cards={getCardsType(hierarchy?.items || [])} />}
      {isTable && !!hierarchy!.items.length && (
        <Table
          heading={'Список произведений'}
          creations={getTableType(hierarchy!.items) || []}
          pageCount={checkTableType(hierarchy!)?.pages || 0}
        />
      )}
      {isTableEmpty && <p className="table__empty">Ничего не найдено</p>}
      {!isMainPage && <Text />}
      {!hierarchy && <Loader />}
    </section>
  );
}

export default Hierarchy;
