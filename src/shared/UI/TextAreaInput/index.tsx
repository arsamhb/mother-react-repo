'use client';
import React, { ChangeEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface TextAreaInputProps {
  value: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  id: string;
  name: string;
  containerClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const TextArea: React.FC<TextAreaInputProps> = ({
  label,
  onChange,
  value,
  placeholder,
  error,
  id,
  name,
  containerClassName,
  labelClassName,
  disabled,
  rows = 4,
  cols,
  resize = 'none',
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <Label htmlFor={id} className="custom-label-text p-0 mb-1">
          {label}
        </Label>
      )}
      <Textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        style={{ resize }}
        onFocus={(e) => e.currentTarget.scrollIntoView({ block: 'center', behavior: 'smooth' })}
        className={cn(
          'w-full min-h-25 font-normal text-neutral-content',
          labelClassName,
          error && 'border-destructive focus-visible:ring-destructive'
        )}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
