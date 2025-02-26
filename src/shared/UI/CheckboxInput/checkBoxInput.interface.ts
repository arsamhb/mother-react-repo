import { ChangeEvent } from 'react';

export interface CheckboxInputProps {
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<Element>) => void;
  error?: string | undefined;
  id: string;
  name: string;
}
