import './breadcrumb.scss';
import { usePathCheck } from '../../hooks/use-path-check';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchHierarchyAction } from '../../store/api-actions/hierarchy-actions';
import { sortItems } from './breadcrumb-utils';

function Breadcrumb() {
  const isMainPage = usePathCheck();

  const dispatch = useAppDispatch();
  const { breadcrumb } = useAppSelector((state) => state);

  return (
    <ul className="breadcrumb">
      {sortItems(breadcrumb).map(({ id, genre }) => (
        <li className="breadcrumb__item" key={id}>
          {isMainPage && (
            <button
              className="breadcrumb__button"
              type="button"
              onClick={() => dispatch(fetchHierarchyAction(`/?g_id=${id}`))}
            >
              {genre}
            </button>
          )}
          {!isMainPage && (
            <Link
              to={AppRoute.Main}
              className="breadcrumb__button"
              onClick={() => dispatch(fetchHierarchyAction(`/?g_id=${id}`))}
            >
              {genre}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
