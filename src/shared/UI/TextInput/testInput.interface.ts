import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface TextInputProps {
  value: string | number;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<Element>) => void;
  placeholder: string;
  error?: string | undefined;
  id: string;
  name: string;
}
