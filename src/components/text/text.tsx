import { Document } from '../../types/document';
import Loader from '../loader/loader';
import './text.scss';

type TextProps = {
  document: Document | null;
};

function Text({ document }: TextProps) {
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
