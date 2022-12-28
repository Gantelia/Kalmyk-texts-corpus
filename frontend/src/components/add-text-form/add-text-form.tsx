import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import AddTextButton from '../add-text-button/add-text-button';
import FieldGroup from '../field-group/field-group';
import Select from '../select/select';
import AddTextField from '../add-text-field/add-text-field';
import './add-text-form.scss';
import { UserText } from '../../types/document';
import { loadTextAction } from '../../store/api-actions/document-actions';
import { getServerMessage } from '../../store/actions';
import Modal from '../modal/modal';
import Asterisk from '../asterisk/asterisk';

function AddTextForm() {
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { addTextMessage } = useAppSelector((state) => state);
  const { genres } = useAppSelector((state) => state);

  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isLoading && addTextMessage) {
      setIsLoading(false);
    }
  }, [addTextMessage, isLoading]);

  const handleSelectChange = (value: string | null) => {
    setSelectValue(value);
  };

  const handleModalClick = () => {
    dispatch(getServerMessage(''));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!selectValue) {
      setIsValid(false);
      return;
    }

    const author = authorRef.current;
    const title = titleRef.current;
    const year = yearRef.current;
    const file = textRef.current;

    if (author && title && year && file) {
      const value = genres.find((item) => item.genre === selectValue);
      const text: UserText = {
        author: author.value,
        genre: String(value!.id),
        /* eslint-disable */
        text_title: title.value,
        pub_year: Number(year.value),
        text_body: file.value
        /* eslint-enable */
      };
      dispatch(loadTextAction(text));
      setIsValid(true);
      setIsLoading(true);
    }
  };

  return (
    <form className="add-text" onSubmit={(evt) => handleSubmit(evt)}>
      {!isValid && (
        <p className="validation-error">
          Пожалуйста, заполните поля со звездочками
        </p>
      )}
      <Select onChange={handleSelectChange} options={genres} />
      <FieldGroup inputType="text" id="title" ref={titleRef} required>
        Название
      </FieldGroup>
      <FieldGroup inputType="text" id="author" ref={authorRef}>
        Автор
      </FieldGroup>
      <FieldGroup inputType="number" id="year" ref={yearRef}>
        Год
      </FieldGroup>
      <AddTextField ref={textRef} />
      <AddTextButton />
      <button
        className="button add-text__submit"
        type="submit"
        disabled={isLoading}
      >
        Отправить
      </button>
      <Asterisk className="add-text__asterisk" />
      {addTextMessage && (
        <Modal onClick={handleModalClick}>
          {addTextMessage || 'Не удалось добавить документ'}
        </Modal>
      )}
    </form>
  );
}

export default AddTextForm;
