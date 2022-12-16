import { NARROW_LIST_CARD_COUNT } from '../../const';
import { CardItem } from '../../types/cards';
import './cards.scss';

type CardsProps = {
  cards: CardItem[];
};

function Cards({ cards }: CardsProps) {
  const isWide = cards.length > NARROW_LIST_CARD_COUNT;

  return (
    <ul className={`cards ${isWide ? 'cards--wide' : ''}`}>
      {cards.map(({ id, title, picture }) => (
        <li className="cards__item" key={id}>
          <button className="cards__button" type="button">
            <img
              className="card__image"
              src={picture}
              width="100"
              height="100"
              alt=""
            />
            <span className="card__title">{title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
