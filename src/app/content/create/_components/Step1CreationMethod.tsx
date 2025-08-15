import React from 'react';
interface Step1Props {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const Step1CreationMethod: React.FC<Step1Props> = ({ selectedMethod, onMethodChange }) => {
  const methods = [
    { value: 'upload', label: 'آپلود فایل‌ها' },
    { value: 'link', label: 'درج دستی لینک' },
    { value: 'database', label: 'انتخاب فایل از دیتابیس' },
  ];

  return (
    <div className="space-y-4 mb-6">
      {methods.map((method, index) => (
        <div key={index} className="flex items-center gap-x-2">
          <input
            type="radio"
            name="radio-7"
            value={method.value}
            checked={selectedMethod === method.value}
            onChange={(e) => onMethodChange(e.target.value)}
            className="radio radio-info radio-sm"
          />
          <span className="text-neutral-content text-xl">{method.label}</span>
        </div>
      ))}
    </div>
  );
};
export default Step1CreationMethod;
