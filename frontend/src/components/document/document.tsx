import { document } from '../../mocks/mocks';
import './document.scss';

function Document() {
  const { title, author, year, body } = document;

  return (
    <article className="document">
      <header className="document__header">
        <p className="document__author">
          <b>{author}</b>
        </p>
        <h3 className="document__title">{title}</h3>
        <p className="document__year">Год издания {year}</p>
      </header>
      <section className="document__body">{body}</section>
    </article>
  );
}

export default Document;
