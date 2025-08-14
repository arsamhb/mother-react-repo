import trashIconRedSvg from '@public/img/svg/trashIconRedSvg.svg';
import trashIconSvg from '@public/img/svg/trashIconSvg.svg';

import videoIconSvg from '@public/img/svg/videoIconSvg.svg';
import videoImgSvg from '@public/img/svg/videoImgSvg.svg';
import Image from 'next/image';

import React from 'react';
import ProgressBar from '../../../../shared/UI/ProgressBar';
import { FileUpload } from './Step2FileUploadProcess';
interface FileUploadProgressProps {
  uploadedFile: FileUpload;
}

const FileUploadProgress: React.FC<FileUploadProgressProps> = ({ uploadedFile }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="text-center">
      <div className="w-full bg-neutral rounded-xs p-4">
        <div>
          <div className="flex gap-x-1 mb-4">
            <Image src={videoIconSvg} alt="ویدیو" />
            <span>فیلم اصلی</span>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-1 gap-x-2">
              <div className=" flex items-center justify-center">
                <Image src={videoImgSvg} alt="ویدیو" />
              </div>
              <div className="flex-1 space-y-3 text-right">
                <p className=" flex flex-col gap-x-1 text-sm text-neutral-content">
                  <span className="font-normal text-base text-base-content">
                    {uploadedFile.file.name}
                  </span>
                  <span>{formatFileSize(uploadedFile.file.size)}</span>
                </p>
                {uploadedFile.status === 'completed' && (
                  <p className=" text-xs font-semibold text-primary">برای مشاهده کلیک کنید</p>
                )}
                {uploadedFile.status === 'uploading' && (
                  <ProgressBar min="" max="100" progressValue={`${uploadedFile.file.size}`} />
                )}
              </div>
            </div>
            <Image
              src={uploadedFile.status === 'uploading' ? trashIconRedSvg : trashIconSvg}
              alt="ویدیو"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadProgress;
