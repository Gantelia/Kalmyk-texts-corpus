import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addText } from '../../store/actions';

import './add-text-field.scss';

function AddTextField() {
  const [input, setInput] = useState('');

  const dispatch = useAppDispatch();
  const { text } = useAppSelector((store) => store);

  /* Обновляет состояние поля ввода, чтобы <label> не падал на текст,
       если текст загружен из файла */
  useEffect(() => {
    setInput(text);
  }, [text]);

  // <div> растягивает <textarea> на высоту содержимого
  return (
    <div className="add-text__grow-wrap" data-replicated-value={input}>
      <textarea
        className="add-text__field"
        onChange={({ target }) => setInput(target.value)}
        onBlur={({ target }) => dispatch(addText(target.value))}
        value={input}
        required
      />
      <label
        /* Доп. класс нужен, чтобы <label> не накладывался на текст,
           когда поле не пустое */
        className={`label-placeholder add-text__textarea-label ${
          input && 'label-placeholder--offset'
        }`}
        htmlFor="loaded-text"
      >
        Введите текст
      </label>
      {input && (
        <button
          className="add-text__clear"
          type="button"
          onClick={() => dispatch(addText(''))}
        >
          <span className="visually-hidden">Очистить</span>
        </button>
      )}
    </div>
  );
}

// именование компонента нужно для дебага
AddTextField.displayName = 'Textarea';

export default AddTextField;
