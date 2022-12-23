import { FormEvent, useEffect, useRef, useState } from 'react';
import { SelectType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchResultAction } from '../../store/api-actions/search-actions';
import FieldGroup from '../../components/field-group/field-group';
import { Genre } from '../../types/genre';
import Loader from '../loader/loader';
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
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { genres, authors, searchResult } = useAppSelector((state) => state);

  useEffect(() => {
    if (isLoading && genres && authors) {
      setIsLoading(false);
      return;
    }
    if (isLoading && searchResult) {
      setIsLoading(false);
      return;
    }
  }, [isLoading, genres, authors, searchResult]);

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
          `?genres=${selectedIds.join(',')}&words=${inputRef.current.value}`
        )
      );
      setIsValid(true);
      setIsLoading(true);
      return;
    }
    if (selectValue && activeSelect === SelectType.Authors) {
      dispatch(
        fetchSearchResultAction(
          `?authors=${selectValue.join(',')}&words=${inputRef.current.value}`
        )
      );
      setIsValid(true);
      setIsLoading(true);
    }
  };

  return (
    <div className="form__container">
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
        <FieldGroup inputType="text" id="text" required={true} ref={inputRef}>
          Введите текст
        </FieldGroup>
        <button className="button form__submit" type="submit">
          Искать
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
}

export default Form;
