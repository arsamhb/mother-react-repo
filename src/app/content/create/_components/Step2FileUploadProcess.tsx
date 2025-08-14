import React from 'react';
import FileUploadProgress from './FileUploadProgress';
import FileUploadZone from './FileUploadZone';
export interface FileUpload {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}
interface Step2FileUploadProps {
  uploadedFile: FileUpload | null;
  onFileSelect: (files: FileList | null) => void;
}

const Step2FileUploadProcess: React.FC<Step2FileUploadProps> = ({ uploadedFile, onFileSelect }) => {
  return (
    <div>
      {uploadedFile ? (
        <FileUploadProgress uploadedFile={uploadedFile} />
      ) : (
        <FileUploadZone onFileSelect={onFileSelect} />
      )}
    </div>
  );
};

export default Step2FileUploadProcess;
