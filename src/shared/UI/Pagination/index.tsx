import { IPaginationParams } from '@/shared/service/interface.schema';
import React from 'react';

interface PaginationProps {
  pagination: IPaginationParams;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { page } = pagination;

  const handlePrevious = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNext = () => {
    onPageChange(page + 1);
  };

  return (
    <div className="flex mx-auto mt-lg">
      <div className={`join`}>
        <button className="join-item btn" onClick={handlePrevious}>
          {'<'}
        </button>
        <button className="join-item btn">صحفه {page}</button>
        <button className="join-item btn" onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
