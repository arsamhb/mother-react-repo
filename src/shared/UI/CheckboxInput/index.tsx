import React, { ChangeEvent } from 'react';

export interface CheckboxInputProps {
  label: string;
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<Element>) => void;
  error?: string | undefined;
  id: string;
  name: string;
  labelTitleClassName?: string;
  inputClassName: string;
  disabled?: boolean;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  isChecked,
  onChange,
  error,
  id,
  name,
  labelTitleClassName,
  inputClassName,
  disabled,
}) => {
  // const labelTitleClassName = clsx('label-text', {
  //   'custom-error-label': error,
  // });

  return (
    <div>
      <label className={`custom-label-text flex items-center gap-md`}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          className={inputClassName}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={labelTitleClassName}>{label}</span>
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
