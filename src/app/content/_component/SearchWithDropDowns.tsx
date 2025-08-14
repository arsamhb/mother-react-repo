import DropDown from '@/shared/UI/DropDown';
import Table from '@/shared/UI/Table/Table';
import backofficeListIconSvg from '@public/img/svg/backofficeListIconSvg.svg';
import blueArrowDownSvg from '@public/img/svg/blueArrowDownSvg.svg';
import buttonRoadMapBookSvg from '@public/img/svg/buttonRoadMapBookSvg.svg';
import buttonRoadMapTimerSvg from '@public/img/svg/buttonRoadMapTimerSvg.svg';
import buttonRoadMapVideoSvg from '@public/img/svg/buttonRoadMapVideoSvg.svg';
import filterIconSvg from '@public/img/svg/filterIconSvg.svg';
import roundedAddIconSvg from '@public/img/svg/roundedAddIconSvg.svg';
import roundedCloseIconSvg from '@public/img/svg/roundedCloseIconSvg.svg';
import ContentSearchBar from './ContentSearchBar';
import DropDownChildItem from './DropDownChildItem';
const SearchDropDownToolbar = () => {
  return (
    <section className="rounded-md  bg-base-100 w-full min-w-0">
      <div className="px-8 py-4 flex flex-col">
        <div className="header flex justify-between items-start gap-x-10">
          <div className="rightItems  ">
            <DropDown
              title="ایجاد محتوا"
              dropDownIconCloseMode={roundedAddIconSvg}
              dropDownIconOpenMode={roundedCloseIconSvg}
              textClass="text-primary"
              dropDownSize="w-40"
              key={'ایجاد محتوا'}
            >
              <DropDownChildItem title="ویدیو" itemIcon={buttonRoadMapVideoSvg} />
              <DropDownChildItem title="جزوه" itemIcon={buttonRoadMapBookSvg} />
              <DropDownChildItem title="آزمون" itemIcon={buttonRoadMapTimerSvg} />
            </DropDown>
          </div>
          <div className="leftItems flex justify-end  items-center basis-2/3 xl:basis-1/2 w-full    gap-x-2">
            <DropDown
              title="تاریخ"
              dropDownIconCloseMode={backofficeListIconSvg}
              textClass="base-content w-7 h-5"
              dropDownSize="w-22"
            />
            <DropDown
              title="فیلتر"
              dropDownIconCloseMode={filterIconSvg}
              textClass="base-content w-7 h-5"
              dropDownSize="w-22"
            />
            <DropDown
              title="10"
              dropDownIconCloseMode={blueArrowDownSvg}
              textClass="base-content w-7 h-5"
              dropDownSize="w-22"
            />
            <ContentSearchBar />
          </div>
        </div>
        <div className="table px-8 pt-4">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default SearchDropDownToolbar;
