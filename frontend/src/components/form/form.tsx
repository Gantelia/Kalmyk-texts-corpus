import { FormEvent, useRef, useState } from 'react';
import { SelectType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchResultAction } from '../../store/api-actions/search-actions';

import { Genre } from '../../types/genre';
import { Input } from '../field-group/field-group';
import Multiselect from '../multiselect/multiselect';
import './form.scss';

function Form() {
  // Одновременно можно искать только в одном выпадающем списке.
  // Жанры и авторы не должны перекрещиваться в запросе.
  const [activeSelect, setActiveSelect] = useState(SelectType.Default);
  const [isValid, setIsValid] = useState(true);
  const [selectValue, setSelectValue] = useState<string[] | Genre[] | null>(
    null
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { genres, authors } = useAppSelector((state) => state);

  const onSelectChange = (value: string[] | Genre[] | null, id: SelectType) => {
    const activeDropdown = value?.length ? id : SelectType.Default;
    setActiveSelect(activeDropdown);
    setSelectValue(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!inputRef || !inputRef.current) {
      return;
    }
    if (activeSelect === SelectType.Default) {
      setIsValid(false);
      return;
    }
    if (selectValue && activeSelect === SelectType.Genres) {
      const selectedIds = selectValue.map(
        (item) => genres.find((genre) => genre.genre === item)?.id
      );
      dispatch(
        fetchSearchResultAction(
          `/?genres=${selectedIds.join(',')}&words=${inputRef.current.value}`
        )
      );
      setIsValid(true);
      return;
    }
    if (selectValue && activeSelect === SelectType.Authors) {
      dispatch(
        fetchSearchResultAction(
          `/?authors=${selectValue.join(',')}&words=${inputRef.current.value}`
        )
      );
      setIsValid(true);
    }
  };

  return (
    <form className="form" onSubmit={(evt) => handleSubmit(evt)}>
      {!isValid && (
        <p className="validation-error">
          Пожалуйста, выберите жанры или авторов
        </p>
      )}
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
      <Input inputType="text" id="text" required={true} ref={inputRef}>
        Введите текст
      </Input>
      <button className="button form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}

export default Form;
