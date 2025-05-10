import clsx from 'clsx';
import React from 'react';

export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'value' | 'onChange'
  > {
  value: string | number;
  label: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
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
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const inputId = id ?? name ?? `text-${Math.random().toString(36).slice(2, 8)}`;

  const labelTitleClassName = clsx('custom-label-text', { 'custom-error-label': error });
  const finalInputClassName = clsx('input input-bordered flex items-center gap-2', inputClassName);
  const finalLabelClassName = clsx('w-full', labelClassName);
  const finalWrapperClassName = clsx(wrapperClassName);

  return (
    <div className={finalWrapperClassName}>
      <div className="label">
        <h4 className={labelTitleClassName}>{label}</h4>
      </div>
      <label htmlFor={inputId} className={finalLabelClassName}>
        <input
          id={inputId}
          name={name}
          type={type}
          className={finalInputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
      </label>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
