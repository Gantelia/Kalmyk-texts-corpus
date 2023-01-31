import { FormEvent, useEffect, useRef, useState } from 'react';
import { SelectType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSearchResultAction } from '../../store/api-actions/search-actions';
import FieldGroup from '../field-group/field-group';
import { Genre } from '../../types/genre';
import Loader from '../loader/loader';
import Multiselect from '../multiselect/multiselect';
import Asterisk from '../asterisk/asterisk';
import { getSearchResult } from '../../store/actions';
import './search-form.scss';

function SearchForm() {
  // Одновременно можно искать только в одном выпадающем списке.
  const [activeSelect, setActiveSelect] = useState(SelectType.Default);
  const [isValid, setIsValid] = useState(true);
  const [selectValue, setSelectValue] = useState<string[] | Genre[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { genres, authors, searchResult } = useAppSelector((state) => state);

  useEffect(() => {
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
        fetchSearchResultAction({
          genres: selectedIds.join(','),
          authors: '',
          words: inputRef.current.value,
          page: 0
        })
      );
      setIsValid(true);
      setIsLoading(true);
      return;
    }
    if (selectValue && activeSelect === SelectType.Authors) {
      dispatch(getSearchResult(null));
      dispatch(
        fetchSearchResultAction({
          genres: '',
          authors: selectValue.join(','),
          words: inputRef.current.value,
          page: 0
        })
      );
    }
    setIsValid(true);
    setIsLoading(true);
  };

  if (!genres || !authors) {
    return <Loader />;
  }

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
          isDisabled={isLoading}
        />
        <Multiselect
          options={authors}
          label={'Выберите автора'}
          id={SelectType.Authors}
          onChange={onSelectChange}
          activeSelect={activeSelect}
          isDisabled={isLoading}
        />
        <FieldGroup
          inputType="text"
          id="text"
          required={true}
          ref={inputRef}
          isDisabled={isLoading}
        >
          Введите текст
        </FieldGroup>
        <button
          className="button form__submit"
          type="submit"
          disabled={isLoading}
        >
          Искать
        </button>
        <Asterisk className="form__asterisk" />
      </form>
      {isLoading && <Loader />}
    </div>
  );
}

export default SearchForm;
