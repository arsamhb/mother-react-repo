import React, { ChangeEvent } from "react";

interface CheckboxInputProps {
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<any>) => void;
  error?: string | undefined;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="custom-checkbox-input-label">
        <h4 className=" custom-checkbox-input-label-text">{label}</h4>
        <input
          type="checkbox"
          checked={isChecked}
          className="custom-checkbox-input"
          onChange={onChange}
        />
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
