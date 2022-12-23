import { forwardRef, PropsWithChildren, Ref, useState } from 'react';
import './field-group.scss';

type InputProps = PropsWithChildren<{
  inputType: string;
  id: string;
  children: string;
  required?: boolean;
}>;

function Input(
  { inputType, id, children, required }: InputProps,
  ref?: Ref<HTMLInputElement>
) {
  const [value, setValue] = useState<string | number>('');

  return (
    <p className="field-group">
      <input
        className="field field-group__input"
        type={inputType}
        id={id}
        ref={ref}
        required={required}
        onChange={({ target }) => setValue(target.value)}
      />
      <label
        className={`label-placeholder ${value && 'label-placeholder--offset'}`}
        htmlFor={id}
      >
        {children}
      </label>
    </p>
  );
}
const FieldGroup = forwardRef(Input);

export default FieldGroup;
