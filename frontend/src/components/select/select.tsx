import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Genre } from '../../types/genre';
import './select.scss';

type SelectProps = {
  options: Genre[];
  onChange: (value: string | null) => void;
  isDisabled: boolean;
};

function Select({ onChange, options, isDisabled }: SelectProps) {
  return (
    <Autocomplete
      className="select add-text__select select--required"
      onChange={(event: any, value: string | null) => {
        onChange(value);
      }}
      options={options.map((option) => option.genre)}
      renderInput={(params) => (
        <TextField {...params} className="select__input" label="Жанр" />
      )}
      disabled={isDisabled}
    />
  );
}

export default Select;
