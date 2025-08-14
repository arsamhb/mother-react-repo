'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DropDownProps {
  title: string;
  linkURL?: string;
  itemIcon: StaticImageData | string;
}
const DropDownChildItem: React.FC<DropDownProps> = ({ title, linkURL, itemIcon }) => {
  return (
    <li className="bg-base-100  rounded-sm h-14 flex items-center justify-center">
      <Link href={linkURL || '/'} className="flex justify-start gap-x-2 w-full h-full rounded-sm">
        <Image src={itemIcon} alt={title} />
        <span className="text-sm font-semibold">{title}</span>
      </Link>
    </li>
  );
};

export default DropDownChildItem;
