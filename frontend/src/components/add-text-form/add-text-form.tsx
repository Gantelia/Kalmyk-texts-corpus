import { useState } from 'react';
import { useAppSelector } from '../../hooks';

import AddTextField from '../add-text-field/add-text-field';
import AddTextButton from '../add-text-button/add-text-button';
import FieldGroup from '../field-group/field-group';
import Select from '../select/select';
import './add-text-form.scss';

function AddTextForm() {
  const [selectValue, setSelectValue] = useState<string | null>(null);

  const { genres } = useAppSelector((state) => state);

  const handleSelectChange = (value: string | null) => {
    setSelectValue(value);
  };

  return (
    <form className="add-text">
      <div className="add-text__container">
        <Select onChange={handleSelectChange} options={genres} />
        <FieldGroup inputType="text" id="author" required={false}>
          Введите автора
        </FieldGroup>
        <FieldGroup inputType="number" id="year" required={false}>
          Введите год
        </FieldGroup>
        <AddTextField />
      </div>
      <AddTextButton />
      <button className="button add-text__submit" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default AddTextForm;
