import { useAppSelector } from '../../hooks';
import './text.scss';

function Text() {
  const { document } = useAppSelector((state) => state);

  const { author, title, year, body } = document;

  return (
    <article className="text">
      <header className="text__header">
        <p className="text__author">
          <b>{author}</b>
        </p>
        <h3 className="text__title">{title}</h3>
        <p className="text__year">Год издания {year}</p>
      </header>
      <section className="text__body">{body}</section>
    </article>
  );
}

export default Text;
