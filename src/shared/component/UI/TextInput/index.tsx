import React from "react";

interface TextInputProps {
  value: string;
  type: "password" | "number" | "text" | "email";
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  children?: React.ReactNode;
  error?: string | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  setValue,
  type,
  value,
  placeholder,
  children,
  error,
}) => {
  return (
    <div>
      <label className="custom-text-input-label">
        <input
          type={type}
          className="custom-text-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {children}
      </label>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TextInput;
