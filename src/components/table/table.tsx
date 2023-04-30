import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { TableItem } from '../../types/table';
import {
  BACKEND_PAGE_COUNT_SHIFT,
  FIRST_PAGE,
  NO_PAGINATION_PAGE_COUNT
} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchHierarchyAction } from '../../store/api-actions/genre-structure-actions';
import { fetchSearchResultAction } from '../../store/api-actions/search-actions';
import './table.scss';

type TableProps = {
  heading: string;
  creations: TableItem[];
  pageCount: number;
  section: string;
};

function Table({ heading, creations, pageCount, section }: TableProps) {
  const [page, setPage] = useState(FIRST_PAGE);

  const dispatch = useAppDispatch();
  const { searchParams } = useAppSelector(({ SEARCH }) => SEARCH);
  const { hierarchyParams } = useAppSelector(
    ({ GENRE_STRUCTURE }) => GENRE_STRUCTURE
  );

  const isSearch = section === 'search' && searchParams;
  const isHierarchy = section === 'hierarchy' && hierarchyParams;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (isSearch) {
      dispatch(
        fetchSearchResultAction({
          ...searchParams,
          page: value - BACKEND_PAGE_COUNT_SHIFT
        })
      );
    }
    if (isHierarchy) {
      dispatch(
        fetchHierarchyAction({
          ...hierarchyParams,
          page: value - BACKEND_PAGE_COUNT_SHIFT
        })
      );
    }
    setPage(value);
  };

  const isPageWrong =
    isSearch && page !== searchParams.page + BACKEND_PAGE_COUNT_SHIFT;

  if (isPageWrong) {
    setPage(searchParams.page + BACKEND_PAGE_COUNT_SHIFT);
  }

  return (
    <>
      <table className="table">
        <caption className="table__caption">{heading}</caption>
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
                <div className="table__container">{author ? author : '-'}</div>
              </td>
              <td className="table__cell">
                <div className="table__container">
                  <Link to={`/document/${id}`} className="table__link">
                    {title}
                  </Link>
                </div>
              </td>
              <td className="table__cell">
                <div className="table__container">{year ? year : '-'}</div>
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
