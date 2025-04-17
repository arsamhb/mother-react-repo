import clsx from 'clsx';
import React from 'react';
import { ChangeEvent } from 'react';

export interface CheckboxInputProps {
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<Element>) => void;
  error?: string | undefined;
  id: string;
  name: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  onChange,
  error,
  id,
  name,
}) => {
  const labelTitleClassName = clsx('label-text', {
    'custom-error-label': error,
  });

  return (
    <div>
      <label className={`custom-label-text`}>
        <h4 className={labelTitleClassName}>{label}</h4>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          className="checkbox checkbox-primary border-2"
          onChange={onChange}
        />
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
