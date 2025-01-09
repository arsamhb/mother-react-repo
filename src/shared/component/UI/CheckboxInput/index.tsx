import React from "react";

interface CheckboxInputProps {}

const CheckboxInput: React.FC<CheckboxInputProps> = ({}) => {
  return (
    <label className="cursor-pointer label">
      <span className="label-text">Remember me</span>
      <input
        type="checkbox"
        defaultChecked
        className="custom-checkbox-input"
      />
    </label>
  );
};

export default CheckboxInput;
