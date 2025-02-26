import { ChangeEvent } from 'react';

export interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Array<{ key: string; value: string }>;
  value: string;
  onChange: (e: ChangeEvent<Element>) => void;
  error?: string | undefined;
  id: string;
  name: string;
}
