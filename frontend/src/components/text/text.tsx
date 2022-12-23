import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchDocumentAction } from '../../store/api-actions/document-action';
import Loader from '../loader/loader';
import './text.scss';

function Text() {
  const { id } = useParams();

  const { document } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (document === null || document?.id !== Number(id)) {
      dispatch(fetchDocumentAction(Number(id)));
    }
  }, [document, id]);

  if (!document) {
    return <Loader />;
  }

  const { author, title, year, body } = document;
  return (
    <article className="text">
      <header className="text__header">
        {author && <p className="text__author">{author}</p>}
        <h3 className="text__title">
          <strong>{title}</strong>
        </h3>
        {year && <p className="text__year">Год издания {year}</p>}
      </header>
      <section className="text__body">{body}</section>
    </article>
  );
}

export default Text;
