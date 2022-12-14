import { useState } from 'react';
import { DropdownType } from '../../const';

import { AUTHORS, GENRES } from '../../mocks/mocks';
import Dropdown from '../dropdown/dropdown';
import './form.scss';

function Form() {
  // Одновременно можно искать только в одном выпадающем списке.
  // Жанры и авторы не должны перекрещиваться в запросе.
  const [activeDropdown, setActiveDropdown] = useState(DropdownType.Default);
  const [dropdownValue, setDropdownValue] = useState<string[] | null>(null);

  const onDropdownChange = (value: string[] | null, id: DropdownType) => {
    const activeDropdown = value?.length ? id : DropdownType.Default;
    setActiveDropdown(activeDropdown);
    setDropdownValue(value);
  };

  return (
    <form className="form">
      {/* fieldset здесь ради legend в качестве названия формы.
        Вероятно, h2 лучше, но удалось найти только обратные сведения */}
      <fieldset className="form__fieldset">
        <legend className="title">Поиск</legend>
        <div className="form__container">
          <Dropdown
            options={GENRES}
            label={'Выберите жанр'}
            id={DropdownType.Genres}
            onChange={onDropdownChange}
            activeDropdown={activeDropdown}
          />
          <Dropdown
            options={AUTHORS}
            label={'Выберите автора'}
            id={DropdownType.Authors}
            onChange={onDropdownChange}
            activeDropdown={activeDropdown}
          />
          <input
            className="form__input"
            type="text"
            id="search-by-text"
            placeholder="Введите текст"
          />
          <label className="visually-hidden" htmlFor="search-by-text">
            Поиск по тексту
          </label>
          {/* submit расположен внутри fieldset для удобства построения сетки */}
          <button className="button form__submit" type="submit">
            Искать
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
