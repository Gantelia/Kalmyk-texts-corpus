import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { GENRES } from '../../mocks/mocks';

function Select() {
  return (
    <Autocomplete
      className="select"
      // onChange={(event: any, value: string | null) => {
      //   onChange(value);
      // }}
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
