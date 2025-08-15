import { MEDIA_UPLOAD_ROUTE } from '@/app/content/_service/route.api';
import api from '@/lib/axiosInstance';
import { notify } from '@/lib/notification/notificationService';
import Button from '@/shared/UI/Button';
import uploadIconSvg from '@public/img/svg/uploadIconSvg.svg';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const CoverFileUploadZone: React.FC<{
  onFileUpload: (data: { id: number }, file: File) => void;
}> = ({ onFileUpload }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

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
  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      await uploadFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full flex justify-between items-center border-2 border-dashed border-primary rounded-lg p-6  cursor-pointer transition-colors"
      >
        <div className="flex text-center items-center gap-x-2">
          <Image src={uploadIconSvg} alt="بارگذاری" className="mb-6" />
          <div>
            <p className="text-lg mb-2 font-semibold">تصویر پیش فرض نمایش </p>
            <p className="text-gray-500 text-sm">JPG, PNG</p>
          </div>
        </div>

        <Button
          variant="primary"
          className="min-w-20 px-10"
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

export default CoverFileUploadZone;
