import React from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  error?: string | undefined;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  placeholder,
  selected,
  setSelected,
  error,
}) => {
  return (
    <div>
      <label className="custom-select-input-label">
        <div className="label">
          <span className="custom-select-input-label-text">{label}</span>
        </div>
        <select
          className="custom-select-input"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
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
