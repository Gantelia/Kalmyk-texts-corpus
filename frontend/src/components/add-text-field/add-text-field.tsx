import { forwardRef, Ref, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showText } from '../../store/actions';
import './add-text-field.scss';

type TextAreaProps = {
  isDisabled: boolean;
};

function TextArea(
  { isDisabled }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const [input, setInput] = useState('');

  const dispatch = useAppDispatch();
  const { text } = useAppSelector((store) => store);

  /* Обновляет состояние поля ввода, чтобы <label> не падал на текст,
       если текст загружен из файла */
  useEffect(() => {
    setInput(text);
  }, [text]);

  return (
    // <div> растягивает <textarea> на высоту содержимого
    <div className="add-text__grow-wrap" data-replicated-value={input}>
      <textarea
        className="add-text__field"
        id="loaded-text"
        onChange={({ target }) => setInput(target.value)}
        onBlur={({ target }) => dispatch(showText(target.value))}
        value={input}
        ref={ref}
        required
        disabled={isDisabled}
      />
      <label
        /* Доп. класс нужен, чтобы <label> не накладывался на текст,
           когда поле не пустое */
        className={`label-placeholder add-text__textarea-label ${
          input && 'label-placeholder--offset'
        }`}
        htmlFor="loaded-text"
      >
        Текст произведения
      </label>
      {input && (
        <button
          className="add-text__clear"
          type="button"
          onClick={() => dispatch(showText(''))}
        >
          <span className="visually-hidden">Очистить</span>
        </button>
      )}
    </div>
  );
}

const AddTextField = forwardRef(TextArea);

export default AddTextField;
