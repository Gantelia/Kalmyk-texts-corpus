import { forwardRef, useEffect, useState } from 'react';

import './add-text-field.scss';

type AddTextFieldProps = {
  content: string;
};

const AddTextField = forwardRef<HTMLTextAreaElement, AddTextFieldProps>(
  ({ content }, ref) => {
    const [text, setText] = useState('');

    /* Обновляет состояние поля ввода, чтобы <label> не падал на текст,
       если текст загружен из файла */
    useEffect(() => {
      content && setText(content);
    }, [content]);

    // <div> растягивает <textarea> на высоту содержимого
    return (
      <div className="add-text__grow-wrap" data-replicated-value={text}>
        <textarea
          className="add-text__field"
          id="loaded-text"
          ref={ref}
          onChange={({ target }) => setText(target.value)}
          value={text}
          required
        />
        <label
          /* Доп. класс нужен, чтобы <label> не накладывался на текст,
           когда поле не пустое */
          className={`add-text__textarea-label ${
            text && 'text__load-label--float'
          }`}
          htmlFor="loaded-text"
        >
          Введите текст
        </label>
        <button
          className="add-text__clear"
          type="button"
          onClick={() => setText('')}
        >
          <span className="visually-hidden">Очистить</span>
        </button>
      </div>
    );
  }
);
// именование компонента нужно для дебага
AddTextField.displayName = 'Textarea';

export default AddTextField;
