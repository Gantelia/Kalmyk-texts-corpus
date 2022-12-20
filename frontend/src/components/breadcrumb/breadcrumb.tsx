import { useState } from 'react';
import './breadcrumb.scss';

import { BREADCRUMB } from '../../mocks/mocks';
import { usePathCheck } from '../../hooks/use-path-check';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Breadcrumb() {
  const [active, setActive] = useState<number | null>(null);

  const isMainPage = usePathCheck();

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <ul className="breadcrumb">
      {BREADCRUMB.map(({ id, genre }) => (
        <li className="breadcrumb__item" key={id}>
          {isMainPage && (
            <button
              className={`breadcrumb__button ${
                id === active && 'breadcrumb__button--active'
              }`}
              type="button"
              onClick={() => handleClick(id)}
            >
              {genre}
            </button>
          )}
          {!isMainPage && (
            <Link
              to={AppRoute.Main}
              className={`breadcrumb__button ${
                id === active && 'breadcrumb__button--active'
              }`}
              onClick={() => handleClick(id)}
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
