'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
export interface DropDownProps {
  textClass?: string;
  dropDownSize?: string;
  title: string;
  dropDownIconCloseMode: StaticImageData | string;
  dropDownIconOpenMode?: StaticImageData | string;
  children?: React.ReactNode;
}
const DropDown: React.FC<DropDownProps> = ({
  title,
  textClass,
  dropDownSize,
  dropDownIconCloseMode,
  dropDownIconOpenMode,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => children && setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      className="dropdown flex-shrink-0"
    >
      <div
        tabIndex={0}
        role="button"
        className={`btn shadow-none ${isOpen && 'rounded-b-none'} ${dropDownSize}`}
      >
        <Image
          src={isOpen ? dropDownIconOpenMode || dropDownIconCloseMode : dropDownIconCloseMode}
          alt={title ? title : 'بستن'}
        />
        <span className={`${textClass} text-xs xl:text-sm flex items-center justify-center`}>
          {title}
        </span>
      </div>
      {children && (
        <ul
          className={`menu dropdown-content bg-neutral  z-[1] space-y-2  right-0 left-0 ${isOpen && 'rounded-b-xs'} ${dropDownSize}`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
