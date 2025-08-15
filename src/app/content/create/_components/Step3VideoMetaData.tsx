import React, { useRef } from 'react';
import { VideoMetadata } from './VideoUploadStepper';
interface Step3Props {
  metadata: VideoMetadata;
  onMetadataChange: (metadata: VideoMetadata) => void;
}

const Step3VideoMetadata: React.FC<Step3Props> = ({ metadata, onMetadataChange }) => {
  const coverInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

      {/* Right Side - Cover Upload */}
      <div>
        <h3 className="text-lg font-medium mb-4">تصویر پیش فرض نمایش</h3>
        <p className="text-sm text-gray-600 mb-4">JPG, PNG</p>

        {!metadata.coverImage ? (
          <div
            onDrop={(e) => {
              e.preventDefault();
              const files = e.dataTransfer.files;
              if (files && files.length > 0) {
                onMetadataChange({ ...metadata, coverImage: files[0] });
              }
            }}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
          >
            {/* <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" /> */}
            <button
              onClick={() => coverInputRef.current?.click()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              انتخاب فایل
            </button>
          </div>
        ) : (
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center gap-3">
              {/* <Image className="w-8 h-8 text-gray-600" /> */}
              <div>
                <p className="font-medium">{metadata.coverImage.name}</p>
                <p className="text-sm text-gray-500">{formatFileSize(metadata.coverImage.size)}</p>
              </div>
            </div>
          </div>
        )}

        <input
          ref={coverInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              onMetadataChange({ ...metadata, coverImage: e.target.files[0] });
            }
          }}
        />

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
    </div>
  );
};

export default Step3VideoMetadata;
