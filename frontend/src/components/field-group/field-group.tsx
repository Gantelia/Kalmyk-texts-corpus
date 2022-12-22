import { PropsWithChildren, useState } from 'react';

import './field-group.scss';

type FieldGroupProps = PropsWithChildren<{
  inputType: string;
  id: string;
  children: string;
  required: boolean;
}>;

function FieldGroup({
  inputType,
  id,
  children,
  required = false
}: FieldGroupProps) {
  const [value, setValue] = useState<string | number>('');

  return (
    <p className="field-group">
      <input
        className="field field-group__input"
        type={inputType}
        id={id}
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

export default FieldGroup;
