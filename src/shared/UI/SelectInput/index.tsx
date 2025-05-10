import clsx from 'clsx';
import React from 'react';

export interface SelectInputProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'value' | 'onChange'> {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  error,
  id,
  name,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const inputId = id ?? name ?? `select-${Math.random().toString(36).slice(2, 8)}`;

  const labelTitleClassName = clsx('custom-label-text', { 'custom-error-label': error });
  const finalInputClassName = clsx('select select-bordered w-full max-w-xs', inputClassName);
  const finalLabelClassName = clsx('w-full max-w-xs', labelClassName);
  const finalWrapperClassName = clsx(wrapperClassName);

  return (
    <div className={finalWrapperClassName}>
      <div className="label">
        <h4 className={labelTitleClassName}>{label}</h4>
      </div>
      <label htmlFor={inputId} className={finalLabelClassName}>
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={finalInputClassName}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option value={opt.key} key={opt.key}>
              {opt.value}
            </option>
          ))}
        </select>
      </label>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectInput;
