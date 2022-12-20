import { useState } from 'react';
import { SelectType } from '../../const';

import { AUTHORS, GENRES } from '../../mocks/mocks';
import Multiselect from '../multiselect/multiselect';
import './form.scss';

function Form() {
  // Одновременно можно искать только в одном выпадающем списке.
  // Жанры и авторы не должны перекрещиваться в запросе.
  const [activeSelect, setActiveSelect] = useState(SelectType.Default);
  const [selectValue, setSelectValue] = useState<string[] | null>(null);

  const onSelectChange = (value: string[] | null, id: SelectType) => {
    const activeDropdown = value?.length ? id : SelectType.Default;
    setActiveSelect(activeDropdown);
    setSelectValue(value);
  };

  return (
    <form className="form">
      <Multiselect
        options={GENRES}
        label={'Выберите жанр'}
        id={SelectType.Genres}
        onChange={onSelectChange}
        activeSelect={activeSelect}
      />
      <Multiselect
        options={AUTHORS}
        label={'Выберите автора'}
        id={SelectType.Authors}
        onChange={onSelectChange}
        activeSelect={activeSelect}
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
      <button className="button form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}

export default Form;
