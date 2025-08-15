import React from 'react';
import BreadCrumbContainer from './BreadCrumbContainer';
import { IHeadItem } from './HeaderItem';
import HeaderItemsContainer from './HeaderItemsContainer';
export interface HeaderDataProps {
  itemsRight: Array<IHeadItem>;
  itemsLeft: Array<IHeadItem>;
}
const Header: React.FC<HeaderDataProps> = ({ itemsRight, itemsLeft }) => {
  return (
    <header className="w-full bg-base-100 flex justify-between items-center px-6 py-3">
      <div className="right flex gap-x-1 items-center">
        <HeaderItemsContainer items={itemsRight} />
        <BreadCrumbContainer />
      </div>
      <div className="left">
        <HeaderItemsContainer items={itemsLeft} />
      </div>
    </header>
  );
};

export default Header;
