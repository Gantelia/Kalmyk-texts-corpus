import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { GENRES } from '../../mocks/mocks';

type SelectProps = {
  onChange: (value: string | null) => void;
};

function Select({ onChange }: SelectProps) {
  return (
    <Autocomplete
      className="select"
      onChange={(event: any, value: string | null) => {
        onChange(value);
      }}
      options={
        GENRES?.map((option) =>
          typeof option === 'string' ? option : option.genre
        ) || []
      }
      renderInput={(params) => (
        <TextField
          {...params}
          className="select__input"
          label="Выберите жанр"
        />
      )}
    />
  );
}

export default Select;
