'use client';
import { useCallback, useState } from 'react';
export interface FileUpload {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

export const useFileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<FileUpload | null>(null);

  const simulateFileUpload = useCallback((file: File) => {
    const fileUpload: FileUpload = {
      file,
      progress: 0,
      status: 'uploading',
    };

    setUploadedFile(fileUpload);

    const interval = setInterval(() => {
      setUploadedFile((prev) => {
        if (!prev) return null;

        const newProgress = prev.progress + Math.random() * 15;

        if (newProgress >= 100) {
          clearInterval(interval);
          return {
            ...prev,
            progress: 100,
            status: 'completed',
          };
        }

        return {
          ...prev,
          progress: newProgress,
        };
      });
    }, 200);
  }, []);

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (files && files.length > 0) {
        const file = files[0];
        simulateFileUpload(file);
      }
    },
    [simulateFileUpload]
  );

  return {
    uploadedFile,
    handleFileSelect,
    setUploadedFile,
  };
};
