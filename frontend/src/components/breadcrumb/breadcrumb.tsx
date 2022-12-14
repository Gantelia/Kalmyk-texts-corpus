import { useState } from 'react';
import './breadcrumb.scss';

import { BREADCRUMB } from '../../mocks/mocks';

function Breadcrumb() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className="breadcrumb">
      {BREADCRUMB.map(({ id, title }) => (
        <li className="breadcrumb__item" key={id}>
          <button
            className={`breadcrumb__button ${
              id === active ? 'breadcrumb__button--active' : ''
            }`}
            type="button"
            onClick={() => setActive(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
