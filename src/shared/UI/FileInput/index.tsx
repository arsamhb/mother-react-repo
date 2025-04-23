'use client';
import React from 'react';

interface FileInputProps {
  onFileChange: (file: File | null) => void;
  file: File | null;
  id: string;
  label: string;
  error?: string | undefined;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange, file, id, label, error }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      onFileChange(selectedFile);
    } else {
      onFileChange(null);
    }
  };

  return (
    <div className="flex flex-col gap-md cursor-pointer">
      <div className="relative w-full max-w-xs mx-auto">
        <input
          name={id}
          id={id}
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs opacity-0 absolute"
          onChange={handleFileChange}
        />
        <div className="flex rounded-lg overflow-hidden border border-base-300">
          <div className="flex-1 bg-base-100 px-4 py-2 text-left truncate">
            {file ? file.name : 'فایلی انتخاب نشده است'}
          </div>
          <label htmlFor={id} className="bg-primary text-white px-4 py-2">
            {label}
          </label>
        </div>
      </div>
      {error && <p className="custom-error-message">{error}</p>}
    </div>
  );
};

export default FileInput;
