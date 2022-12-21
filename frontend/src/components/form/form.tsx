import { useState } from 'react';
import { SelectType } from '../../const';
import { useAppSelector } from '../../hooks';

import { Genre } from '../../types/genre';
import FieldGroup from '../field-group/field-group';
import Multiselect from '../multiselect/multiselect';
import './form.scss';

function Form() {
  // Одновременно можно искать только в одном выпадающем списке.
  // Жанры и авторы не должны перекрещиваться в запросе.
  const [activeSelect, setActiveSelect] = useState(SelectType.Default);
  const [selectValue, setSelectValue] = useState<string[] | Genre[] | null>(
    null
  );

  const { genres, authors } = useAppSelector((state) => state);

  const onSelectChange = (value: string[] | Genre[] | null, id: SelectType) => {
    const activeDropdown = value?.length ? id : SelectType.Default;
    setActiveSelect(activeDropdown);
    setSelectValue(value);
  };

  return (
    <form className="form">
      <Multiselect
        options={genres}
        label={'Выберите жанр'}
        id={SelectType.Genres}
        onChange={onSelectChange}
        activeSelect={activeSelect}
      />
      <Multiselect
        options={authors}
        label={'Выберите автора'}
        id={SelectType.Authors}
        onChange={onSelectChange}
        activeSelect={activeSelect}
      />
      <FieldGroup inputType="text" id="text" required={true}>
        Введите текст
      </FieldGroup>
      <button className="button form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}

export default Form;
