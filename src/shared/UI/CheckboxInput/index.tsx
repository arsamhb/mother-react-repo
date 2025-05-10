import clsx from 'clsx';
import React from 'react';

export interface CheckboxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  label: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  error,
  id,
  name,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const inputId = id ?? name ?? `checkbox-${Math.random().toString(36).slice(2, 8)}`;

  const labelTitleClassName = clsx('label-text', { 'custom-error-label': error });
  const finalInputClassName = clsx('checkbox checkbox-primary border-2', inputClassName);
  const finalLabelClassName = clsx('custom-label-text', labelClassName);
  const finalWrapperClassName = clsx(wrapperClassName);

  return (
    <div className={finalWrapperClassName}>
      <label htmlFor={inputId} className={finalLabelClassName}>
        <h4 className={labelTitleClassName}>{label}</h4>
        <input
          id={inputId}
          name={name}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={finalInputClassName}
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

export default CheckboxInput;
