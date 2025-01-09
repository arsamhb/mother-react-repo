import React from "react";

interface CheckboxInputProps {
  label: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string | undefined;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  setIsChecked,
  error,
}) => {
  return (
    <div>
      <label className="custom-checkbox-input-label">
        <span className=" custom-checkbox-input-label-text">{label}</span>
        <input
          type="checkbox"
          checked={isChecked}
          className="custom-checkbox-input"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
