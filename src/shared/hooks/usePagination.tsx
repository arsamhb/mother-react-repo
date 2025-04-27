import { useState, useEffect } from 'react';
import { FIRST_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/lib/constants';

export interface UsePaginationReturn {
  page: number;
  limit: number;
  setPage: (p: number) => void;
  setLimit: (l: number) => void;
}

export const usePagination = <Dependencies extends any[]>(
  dependencies: Dependencies,
  {
    initialPage = FIRST_PAGE_INDEX,
    initialLimit = DEFAULT_PAGE_SIZE,
  }: { initialPage?: number; initialLimit?: number } = {}
): UsePaginationReturn => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    if (page !== initialPage) {
      setPage(initialPage);
    }
  }, dependencies);

  return { page, limit, setPage, setLimit };
};
