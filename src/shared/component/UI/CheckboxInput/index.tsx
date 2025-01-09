import React, { InputHTMLAttributes } from "react";

interface CheckboxInputProps {
  label: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  setIsChecked,
}) => {
  return (
    <label className="cursor-pointer label">
      <span className="label-text">{label}</span>
      <input
        type="checkbox"
        checked={isChecked}
        className="custom-checkbox-input"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </label>
  );
};

export default CheckboxInput;
