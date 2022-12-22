import './breadcrumb.scss';
import { usePathCheck } from '../../hooks/use-path-check';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Genre } from '../../types/genre';
import { useAppDispatch } from '../../hooks';
import { fetchHierarchy } from '../../store/api-actions/hierarchy-actions';

type BreadcrumbProps = {
  items: Genre[];
};

function Breadcrumb({ items }: BreadcrumbProps) {
  const isMainPage = usePathCheck();

  const dispatch = useAppDispatch();

  return (
    <ul className="breadcrumb">
      {items.map(({ id, genre }) => (
        <li className="breadcrumb__item" key={id}>
          {isMainPage && (
            <button
              className="breadcrumb__button"
              type="button"
              onClick={() => dispatch(fetchHierarchy(`/?g_id=${id}`))}
            >
              {genre}
            </button>
          )}
          {!isMainPage && (
            <Link
              to={AppRoute.Main}
              className="breadcrumb__button"
              onClick={() => dispatch(fetchHierarchy(`/?g_id=${id}`))}
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
