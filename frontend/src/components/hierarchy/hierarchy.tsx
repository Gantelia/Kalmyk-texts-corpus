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

  return (
    <section className="genre-structure">
      <h2 className="title">Иерархическая структура жанров</h2>
      <Breadcrumb />
      {isConditionMet(isMainPage, hierarchy, RenderType.Cards) && (
        <Cards cards={getCardsType(hierarchy?.items || [])} />
      )}
      {isConditionMet(isMainPage, hierarchy, RenderType.Table) && (
        <Table
          heading={'Список произведений'}
          creations={getTableType(hierarchy!.items) || []}
          pageCount={checkTableType(hierarchy!)?.pages || 0}
        />
      )}
      {!isMainPage && <Text />}
      {!hierarchy && <Loader />}
    </section>
  );
}

export default Hierarchy;
