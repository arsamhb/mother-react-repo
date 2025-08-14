import Button from '@/shared/UI/Button';
import uploadIconSvg from '@public/img/svg/uploadIconSvg.svg';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
interface FileUploadZoneProps {
  onFileSelect: (files: FileList | null) => void;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      onFileSelect(files);
    },
    [onFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);
  return (
    <div className="text-center flex items-center justify-center px-24 xl:px-52">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full border-2 border-dashed border-primary rounded-lg p-12 my-6 cursor-pointer  transition-colors"
      >
        <div className="flex flex-col items-center">
          <Image src={uploadIconSvg} alt="بارگذاری" className="mb-6" />
          <p className="text-lg mb-2">فایل را انتخاب کنید یا بکشید و اینجا رها کنید</p>
          <p className="text-gray-500 text-sm">JPG, PNG or PDF, MP4</p>
        </div>

        <Button
          variant="primary"
          className="min-w-40 px-20 mt-6"
          onClick={() => fileInputRef.current?.click()}
        >
          انتخاب فایل
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png,.pdf,.mp4"
          onChange={(e) => onFileSelect(e.target.files)}
        />
      </div>
    </div>
  );
};

export default FileUploadZone;
