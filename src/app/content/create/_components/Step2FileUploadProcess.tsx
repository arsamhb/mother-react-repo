import React from 'react';
import FileUploadProgress from './FileUploadSuccess';
import FileUploadZone from './FileUploadZone';
export interface UploadedFile {
  file: File;
  id: number;
  status: 'uploading' | 'completed' | 'error';
}
interface Step2FileUploadProps {
  uploadedFile: UploadedFile | null;
  onFileUpload: (data: { id: number }, file: File) => void;
}

const Step2FileUploadProcess: React.FC<Step2FileUploadProps> = ({ uploadedFile, onFileUpload }) => {
  return (
    <>
      {uploadedFile ? (
        <>
          <FileUploadProgress uploadedFile={uploadedFile} />
        </>
      ) : (
        <FileUploadZone onFileUpload={onFileUpload} />
      )}
    </>
  );
};

export default Step2FileUploadProcess;
