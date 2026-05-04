import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void; // ← string directly, same as RadioInput
  error?: string;
  id: string;
  name: string;
  disabled?: boolean;
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
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className={error ? 'custom-error-label' : 'custom-label-text'}>
        {label}
      </Label>
      <Select value={value} onValueChange={onChange} name={name} disabled={disabled}>
        <SelectTrigger
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn('w-full', error && 'border-destructive focus:ring-destructive')}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.key} value={opt.key}>
              {opt.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p id={`${id}-error`} role="alert" className="custom-error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectInput;
