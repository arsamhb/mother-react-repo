import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'value' | 'onChange' | 'id' | 'name'
  > {
  value?: string | number;
  label: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  id: string;
  name: string;
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
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className={error ? 'custom-error-label' : 'custom-label-text'}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn('w-full', error && 'border-destructive focus-visible:ring-destructive')}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
