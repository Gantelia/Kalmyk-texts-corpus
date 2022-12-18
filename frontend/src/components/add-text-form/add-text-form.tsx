import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { DropdownType } from '../../const';
import { AUTHORS, GENRES } from '../../mocks/mocks';
import AddTextField from '../add-text-field/add-text-field';
import Dropdown from '../dropdown/dropdown';
import './add-text-form.scss';

function AddTextForm() {
  const [dropdownValue, setDropdownValue] = useState<string[] | null>(null);
  const [fileText, setFileText] = useState('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current || !fileText) {
      return;
    }
    // Отображает контент загруженного файла в <textarea>
    textareaRef.current.value = fileText;
  }, [fileText]);

  const handleDropdownChange = (value: string[] | null) => {
    setDropdownValue(value);
  };

  // Вытаскивает контент из загруженного файла
  const handleFileLoad = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const reader = new FileReader();
    evt.target.files && reader.readAsText(evt.target.files[0]);

    reader.onload = async (evt) => {
      if (typeof evt.target?.result === 'string') {
        const text = evt.target?.result as string;
        setFileText(text);
      }
    };
  };

  return (
    <form className="add-text">
      <div className="add-text__container">
        <Dropdown
          options={GENRES}
          label={'Выберите жанр'}
          id={DropdownType.Genres}
          onChange={handleDropdownChange}
        />
        <Dropdown
          options={AUTHORS}
          label={'Выберите автора'}
          id={DropdownType.Authors}
          onChange={handleDropdownChange}
        />
        <AddTextField ref={textareaRef} content={fileText} />
      </div>
      <label className="add-text__load-label button" htmlFor="load-file">
        <input
          className="visually-hidden"
          type="file"
          id="load-file"
          accept=".txt"
          onChange={(evt) => handleFileLoad(evt)}
        />
        Загрузить из файла
      </label>
      <button className="button add-text__submit" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default AddTextForm;
