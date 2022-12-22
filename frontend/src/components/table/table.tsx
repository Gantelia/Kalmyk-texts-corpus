import { TableItem } from '../../types/table';
import Pagination from '@mui/material/Pagination';
import { NO_PAGINATION_PAGE_COUNT } from '../../const';

import './table.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchHierarchy } from '../../store/api-actions/hierarchy-actions';

type TableProps = {
  heading: string;
  className: string;
  creations: TableItem[];
  pageCount: number;
};

function Table({ heading, className, creations, pageCount }: TableProps) {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(fetchHierarchy(`?/page=${value}`));
  };

  if (!creations.length) {
    return <p className="table__empty">Ничего не найдено</p>;
  }

  return (
    <>
      <table className="table">
        <caption className={className}>{heading}</caption>
        <thead className="table__row table__row--head">
          <tr>
            <th className="table__cell">
              <div className="table__container">Автор</div>
            </th>
            <th className="table__cell">
              <div className="table__container">Название произведения</div>
            </th>
            <th className="table__cell">
              <div className="table__container">Год&nbsp;издания</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {creations?.map(({ id, title, author, year }) => (
            <tr className="table__row" key={id}>
              <td className="table__cell">
                <div className="table__container">{author ? author : ''}</div>
              </td>
              <td className="table__cell">
                <div className="table__container">
                  <Link to={`/document/${id}`} className="table__link">
                    {title}
                  </Link>
                </div>
              </td>
              <td className="table__cell">
                <div className="table__container">{year ? year : ''}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Пагинация */}
      {pageCount > NO_PAGINATION_PAGE_COUNT && (
        <Pagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default Table;
