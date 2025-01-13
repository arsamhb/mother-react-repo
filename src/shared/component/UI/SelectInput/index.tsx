import React, { ChangeEvent } from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  selected: string;
  onChange: (e: ChangeEvent<any>) => void;
  error?: string | undefined;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  placeholder,
  selected,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="custom-select-input-label">
        <div className="label">
          <h4 className="custom-select-input-label-text">{label}</h4>
        </div>
        <select
          className="custom-select-input"
          value={selected}
          onChange={onChange}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option value={opt.key} key={opt.key}>
              {opt.value}
            </option>
          ))}
        </select>
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default SelectInput;
