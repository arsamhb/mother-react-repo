import React from 'react';
import CoverFileUploadZone from './CoverFileUploadZone';
import FileUploadSuccess from './FileUploadSuccess';
import { UploadedFile } from './Step2FileUploadProcess';
import { VideoMetadata } from './VideoUploadStepper';
interface Step3Props {
  metadata: VideoMetadata;
  onMetadataChange: (metadata: VideoMetadata) => void;
  uploadedFile: UploadedFile | null;
  onFileUpload: (data: { id: number }, file: File) => void;
}

const Step3VideoMetadata: React.FC<Step3Props> = ({
  uploadedFile,
  onFileUpload,
  metadata,
  onMetadataChange,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Right Side - Cover Upload */}
      <div>
        {uploadedFile ? (
          <>
            <FileUploadSuccess uploadedFile={uploadedFile} />
          </>
        ) : (
          <CoverFileUploadZone onFileUpload={onFileUpload} />
        )}

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">عنوان اصلی فیلم *</label>
          <input
            type="text"
            placeholder="عنوان فیلم را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">کتب</label>
          <input
            type="text"
            placeholder="عنوان را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">مقطع *</label>
          <input
            type="text"
            placeholder="انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Left Side - Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">فصل *</label>
          <input
            type="text"
            placeholder="انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={metadata.title}
            onChange={(e) => onMetadataChange({ ...metadata, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">زیر فصل *</label>
          <input
            type="text"
            placeholder="انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={metadata.description}
            onChange={(e) => onMetadataChange({ ...metadata, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">شرکت سازنده</label>
          <input
            type="text"
            placeholder="شرکت سازنده انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={metadata.company}
            onChange={(e) => onMetadataChange({ ...metadata, company: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">زبان ویدیو *</label>
          <div className="relative">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={metadata.language}
              onChange={(e) => onMetadataChange({ ...metadata, language: e.target.value })}
            >
              <option value="انگلیسی">انگلیسی</option>
              <option value="فارسی">فارسی</option>
              <option value="عربی">عربی</option>
            </select>
            {/* <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">توضیحات ویدیو *</label>
          <textarea
            placeholder="توضیحات ویدیو را وارد کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
            value={metadata.videoDescription}
            onChange={(e) => onMetadataChange({ ...metadata, videoDescription: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">پایه</label>
          <input
            type="text"
            placeholder="انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={metadata.base}
            onChange={(e) => onMetadataChange({ ...metadata, base: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">رشته</label>
          <input
            type="text"
            placeholder="انتخاب کنید"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={metadata.field}
            onChange={(e) => onMetadataChange({ ...metadata, field: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3VideoMetadata;
