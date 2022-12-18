import { TableItem } from '../../types/table-items';
import Pagination from '@mui/material/Pagination';
import { NO_PAGINATION_PAGE_COUNT } from '../../const';

import './table.scss';

type TableProps = {
  heading: string;
  className: string;
  creations: TableItem[];
  pageCount: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

function Table({
  heading,
  className,
  creations,
  pageCount,
  currentPage,
  onChange
}: TableProps) {
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
          {creations.map(({ id, title, author, year }) => (
            <tr className="table__row" key={id}>
              <td className="table__cell">
                <div className="table__container">{author}</div>
              </td>
              <td className="table__cell">
                <div className="table__container">
                  <button className="table__button" type="button">
                    {title}
                  </button>
                </div>
              </td>
              <td className="table__cell">
                <div className="table__container">{year}</div>
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
          page={currentPage}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default Table;
