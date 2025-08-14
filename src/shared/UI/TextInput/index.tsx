import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface TextInputProps {
  value: string | number;
  label?: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | undefined;
  id: string;
  name: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  multiline?: boolean;
  iconItem?: StaticImageData | string;
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
  icon,
  containerClassName,
  labelClassName,
  disabled,
  iconItem,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <div className="label p-0">{label && <h4 className={'custom-label-text'}>{label}</h4>}</div>
      <label
        className={clsx(
          `input  flex items-center gap-2 ${labelClassName}`,
          error ? 'input-error' : 'input-default'
        )}
        // TODO ADD MULTIPLE VARIATION FOR INPUT
        // className={clsx(`input flex items-center gap-2 bg-base-300 ${labelClassName}`, error ? 'input-error' : 'input-default')}
      >
        {iconItem && <Image src={iconItem} alt="جستجو" />}

        <input
          disabled={disabled}
          id={id}
          name={name}
          type={type}
          className="grow text-center font-normal text-base text-neutral-content"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {icon && <kbd className="kbd kbd-sm">{icon}</kbd>}
      </label>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default TextInput;
