import Button from '@/shared/UI/Button';
import uploadIconSvg from '@public/img/svg/uploadIconSvg.svg';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import api from '../../../../lib/axiosInstance';
import { notify } from '../../../../lib/notification/notificationService';
import { MEDIA_UPLOAD_ROUTE } from '../../_service/route.api';

const FileUploadZone: React.FC<{
  onFileUpload: (data: { id: number }, file: File) => void;
}> = ({ onFileUpload }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      await uploadFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleFileSelect = async (files: FileList | null) => {
    if (files && files.length > 0) {
      console.log('Selected file:', files[0]);
      await uploadFile(files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const data = await api.postFormData<{ id: number }>(MEDIA_UPLOAD_ROUTE)(formData);
      onFileUpload(data, file);
    } catch (error) {
      notify.error(`خطا در بارگذاری فایل ${error}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="text-center flex items-center justify-center px-24 xl:px-52">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full border-2 border-dashed border-primary rounded-lg p-12 my-6 cursor-pointer transition-colors"
      >
        <div className="flex flex-col items-center">
          <Image src={uploadIconSvg} alt="بارگذاری" className="mb-6" />
          <p className="text-lg mb-2">فایل را انتخاب کنید یا بکشید و اینجا رها کنید</p>
          <p className="text-gray-500 text-sm">JPG, PNG, PDF, MP4</p>
        </div>

        <Button
          variant="primary"
          className="min-w-40 px-20 mt-6"
          onClick={() => fileInputRef.current?.click()}
          isLoading={isUploading}
        >
          انتخاب فایل
        </Button>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png,.pdf,.mp4"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>
    </div>
  );
};

export default FileUploadZone;
