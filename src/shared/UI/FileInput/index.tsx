'use client';
import clsx from 'clsx';
import React from 'react';

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'onChange'> {
  onFileChange: (file: File | null) => void;
  file: File | null;
  label: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  onFileChange,
  file,
  id,
  name,
  label,
  error,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  const inputId = id ?? name ?? `file-${Math.random().toString(36).slice(2, 8)}`;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileChange(event.target.files[0]);
    } else {
      onFileChange(null);
    }
  };

  const finalWrapperClass = clsx('flex flex-col gap-md cursor-pointer', wrapperClassName);
  const finalInputClass = clsx(
    'file-input file-input-bordered file-input-primary w-full max-w-xs opacity-0 absolute',
    inputClassName
  );
  const finalLabelClass = clsx('bg-primary text-white px-4 py-2', labelClassName);

  return (
    <div className={finalWrapperClass}>
      <div className="relative w-full max-w-xs mx-auto">
        <input
          name={name}
          id={inputId}
          type="file"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={finalInputClass}
          onChange={handleFileChange}
          {...rest}
        />
        <div className="flex rounded-lg overflow-hidden border border-base-300">
          <div className="flex-1 bg-base-100 px-4 py-2 text-left truncate">
            {file ? file.name : 'فایلی انتخاب نشده است'}
          </div>
          <label htmlFor={inputId} className={finalLabelClass}>
            {label}
          </label>
        </div>
      </div>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default FileInput;
