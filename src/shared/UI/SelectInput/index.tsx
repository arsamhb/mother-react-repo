import React, { ChangeEvent } from 'react';

interface SelectInputProps {
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
  return (
    <div>
      <div className="label">
        <h4 className={`custom-select-input-label-text ${error && 'custom-error-label'}`}>
          {label}
        </h4>
      </div>
      <label className={`custom-select-input-label`}>
        <select
          className="custom-select-input"
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
