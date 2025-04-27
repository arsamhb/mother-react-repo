import { useMemo } from 'react';
import { useQuery, UseQueryOptions, keepPreviousData } from '@tanstack/react-query';
import { usePagination } from '@/shared/hooks/usePagination';
import { DEFAULT_PAGE_SIZE } from '@/lib/constants';

export type DependencyExtractor<T> = (filters: T) => unknown[];

interface CreatePaginatedQueryOptions<TFilters, TResponse> {
  queryKey: string;
  initialLimit?: number;
  resetDeps?: DependencyExtractor<TFilters>;
  fetchFn: (args: TFilters & { page: number; limit: number }) => Promise<TResponse>;
  options?: Omit<UseQueryOptions<TResponse, Error, TResponse>, 'queryKey' | 'queryFn'>;
}

export const createPaginatedQuery = <TFilters extends Record<string, any>, TResponse>({
  queryKey,
  fetchFn,
  initialLimit = DEFAULT_PAGE_SIZE,
  resetDeps,
  options = {},
}: CreatePaginatedQueryOptions<TFilters, TResponse>) => {
  return (filters: TFilters) => {
    const deps: unknown[] = resetDeps ? resetDeps(filters) : Object.values(filters);

    const { page, limit, setPage, setLimit } = usePagination(deps, {
      initialPage: 1,
      initialLimit,
    });

    const finalKey = useMemo(
      () => [queryKey, filters, { page, limit }],
      [queryKey, filters, page, limit]
    );

    const query = useQuery({
      queryKey: finalKey,
      queryFn: () => fetchFn({ ...filters, page, limit }),
      placeholderData: keepPreviousData,
      staleTime: 30_000,
      ...options,
    });

    return { ...query, page, limit, setPage, setLimit };
  };
};
