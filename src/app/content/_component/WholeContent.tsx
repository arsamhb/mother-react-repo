import Table from '@/shared/UI/Table/Table';
import SearchDropDownToolbar from './SearchWithDropDowns';
const WholeContent = () => {
  return (
    <div className="rounded-md  bg-base-100 w-full min-w-0">
      <div className="px-8 py-4 flex flex-col">
        <SearchDropDownToolbar />
        <div className="table px-8 pt-4">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default WholeContent;
