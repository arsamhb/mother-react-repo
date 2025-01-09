import React from "react";

interface TextInputProps {
  value: string;
  type: "password" | "number" | "text" | "email";
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  children?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  setValue,
  type,
  value,
  placeholder,
  children,
}) => {
  return (
    <div>
      <label className="input-label-theme">
        <input
          type={type}
          className="input-input-theme"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {children}
      </label>
      <p className="error-text">the errors will be shown in here</p>
    </div>
  );
};

export default TextInput;