import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Genre } from '../../types/genre';
import { SelectType } from '../../const';
import '../../sass/common/select.scss';

type MultiselectProps = {
  options: Genre[] | string[];
  label: string;
  id: SelectType;
  activeSelect?: SelectType;
  onChange: (value: string[] | null, id: SelectType) => void;
};

function Multiselect({
  options,
  label,
  id,
  activeSelect = SelectType.Default,
  onChange
}: MultiselectProps) {
  const isActive = id === activeSelect;
  const isNoneChosen = activeSelect === SelectType.Default;

  return (
    <Autocomplete
      className={`select ${isActive || isNoneChosen ? 'select--required' : ''}`}
      disabled={!isActive && !isNoneChosen}
      onChange={(event: any, newValue: string[] | null) => {
        onChange(newValue, id);
      }}
      multiple
      options={
        options.map((option) =>
          typeof option === 'string' ? option : option.genre
        ) || []
      }
      renderInput={(params) => (
        <TextField {...params} className="select__input" label={label} />
      )}
    />
  );
}

export default Multiselect;
