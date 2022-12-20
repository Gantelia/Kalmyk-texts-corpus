import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Genre } from '../../types/genre';
import { DropdownType } from '../../const';
import './dropdown.scss';

type DropdownProps = {
  options?: Genre[] | string[];
  label: string;
  id: DropdownType;
  activeDropdown?: DropdownType;
  onChange: (value: string[] | null, id: DropdownType) => void;
};

function Dropdown({
  options,
  label,
  id,
  activeDropdown = DropdownType.Default,
  onChange
}: DropdownProps) {
  return (
    <Autocomplete
      className="dropdown"
      disabled={
        activeDropdown === DropdownType.Default ? false : id !== activeDropdown
      }
      onChange={(event: any, newValue: string[] | null) => {
        onChange(newValue, id);
      }}
      multiple
      options={
        options?.map((option) =>
          typeof option === 'string' ? option : option.genre
        ) || []
      }
      renderInput={(params) => (
        <TextField {...params} className="dropdown__input" label={label} />
      )}
    />
  );
}

export default Dropdown;
