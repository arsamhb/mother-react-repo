'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
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

export const createUrlSyncedPaginatedQuery = <TFilters extends Record<string, any>, TResponse>(
  options: CreatePaginatedQueryOptions<TFilters, TResponse>
) => {
  const useBaseQuery = createPaginatedQuery<TFilters, TResponse>(options);

  return (filters: TFilters) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { page, setPage, ...queryResult } = useBaseQuery(filters);

    useEffect(() => {
      const pageParam = parseInt(searchParams.get('page') ?? '1', 10);
      if (!Number.isNaN(pageParam) && pageParam !== page) {
        setPage(pageParam);
      }
    }, [searchParams, page]);

    const handlePageChange = useCallback(
      (nextPage: number) => {
        setPage(nextPage);

        const params = new URLSearchParams(searchParams);
        if (nextPage === 1) {
          params.delete('page');
        } else {
          params.set('page', `${nextPage}`);
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: true });
      },
      [router, pathname, searchParams, setPage]
    );

    return {
      ...queryResult,
      page,
      handlePageChange,
    };
  };
};
