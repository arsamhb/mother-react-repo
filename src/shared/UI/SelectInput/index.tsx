import clsx from 'clsx';
import React from 'react';
import { ChangeEvent } from 'react';

export interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  value: string;
  onChange: (e: ChangeEvent<Element>) => void;
  error?: string | undefined;
  id: string;
  name: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  error,
  id,
  name,
}) => {
  const labelTitleClassName = clsx('custom-label-text', {
    'custom-error-label': error,
  });

  return (
    <div>
      <div className="label">
        <h4 className={labelTitleClassName}>{label}</h4>
      </div>
      <label className={`w-full max-w-xs`}>
        <select
          className="select select-bordered"
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option value={opt.key} key={opt.key}>
              {opt.value}
            </option>
          ))}
        </select>
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default SelectInput;
