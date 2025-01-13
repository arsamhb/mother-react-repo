import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  value: string | number;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<any>) => void;
  placeholder: string;
  error?: string | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  type,
  value,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label className="custom-text-input-label">
        <div className="label">
          <h4 className="custom-select-input-label-text">{label}</h4>
        </div>
        <input
          type={type}
          className="custom-text-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TextInput;
