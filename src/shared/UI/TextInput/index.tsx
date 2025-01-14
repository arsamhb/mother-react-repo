import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface TextInputProps {
  value: string | number;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<Element>) => void;
  placeholder: string;
  error?: string | undefined;
  id: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  type,
  value,
  placeholder,
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
      <label className={`custom-text-input-label`}>
        <input
          id={id}
          name={name}
          type={type}
          className="custom-text-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default TextInput;