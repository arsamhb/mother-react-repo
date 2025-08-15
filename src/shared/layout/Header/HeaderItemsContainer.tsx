import React from 'react';
import HeaderItem, { IHeadItem } from './HeaderItem';
interface HeaderDataProps {
  items: Array<IHeadItem>;
}
const HeaderItemsContainer: React.FC<HeaderDataProps> = ({ items }) => {
  return (
    <div className="flex gap-x-3">
      {items.map((item, index) => (
        <HeaderItem key={index} item={item} />
      ))}
    </div>
  );
};

export default HeaderItemsContainer;
