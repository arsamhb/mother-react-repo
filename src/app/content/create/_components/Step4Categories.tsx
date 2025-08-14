import React from 'react';

interface Step4Props {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Step4Categories: React.FC<Step4Props> = ({ selectedCategory, onCategorySelect }) => {
  const categories = ['آرت', 'مل', 'پایه یازدهم', 'حسابان', 'ریاضی'];

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <span className="text-sm">ایجاد دسته‌بندی</span>
        </div>
        <p className="text-sm text-gray-600">دسته بندی را انتخاب کنید</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step4Categories;
