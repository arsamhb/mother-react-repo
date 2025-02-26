import React from 'react';
import { CheckboxInputProps } from './checkBoxInput.interface';

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  onChange,
  error,
  id,
  name,
}) => {
  return (
    <div>
      <label className={`custom-checkbox-input-label`}>
        <h4 className={`custom-checkbox-input-label-text ${error && 'custom-error-label'}`}>
          {label}
        </h4>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          className="custom-checkbox-input"
          onChange={onChange}
        />
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
