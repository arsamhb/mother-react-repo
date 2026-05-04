import React, { useMemo } from 'react';
import { convertToPersianDigits } from '@/shared/utils/digitConvertor.utils';
import useWindowSize from '@/shared/hooks/useWindowSize';
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import Loading from '@/shared/UI/Loading';
type PaginationProps =
  | {
      pagination: { page: number; totalPages: number };
      isLoading?: boolean;
      onPageChange: (page: number) => void;
      className?: string;
    }
  | {
      pagination: { page: number; total: number; limit: number };
      isLoading?: boolean;
      onPageChange: (page: number) => void;
      className?: string;
    };

type PageItem = { type: 'page'; value: number } | { type: 'ellipsis'; id: string };

const PaginationComponent: React.FC<PaginationProps> = ({
  pagination,
  isLoading,
  onPageChange,
  className = '',
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const page = pagination.page;

  const totalPages =
    'totalPages' in pagination
      ? pagination.totalPages
      : Math.ceil(pagination.total / pagination.limit);

  const handlePrevious = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const pageItems = useMemo<PageItem[]>(() => {
    if (totalPages < 1) return [];

    const addPage = (items: PageItem[], value: number) => {
      if (!items.some((i) => i.type === 'page' && i.value === value)) {
        items.push({ type: 'page', value });
      }
    };

    const COLLAPSE_THRESHOLD = 6;
    const items: PageItem[] = [];
    const shouldCollapse = totalPages > COLLAPSE_THRESHOLD;

    if (!shouldCollapse) {
      for (let i = 1; i <= totalPages; i++) {
        items.push({ type: 'page', value: i });
      }
      return items;
    }

    items.push({ type: 'page', value: 1 });

    if (page <= 3) {
      addPage(items, 2);
      addPage(items, 3);
      addPage(items, 4);
      items.push({ type: 'ellipsis', id: 'end-ellipsis' });
      addPage(items, totalPages - 1);
      addPage(items, totalPages);
    } else if (page >= totalPages - 2) {
      items.push({ type: 'ellipsis', id: 'start-ellipsis' });
      addPage(items, totalPages - 3);
      addPage(items, totalPages - 2);
      addPage(items, totalPages - 1);
      addPage(items, totalPages);
    } else {
      items.push({ type: 'ellipsis', id: 'start-ellipsis' });
      addPage(items, page - 1);
      addPage(items, page);
      addPage(items, page + 1);
      items.push({ type: 'ellipsis', id: 'end-ellipsis' });
      addPage(items, totalPages);
    }

    return items;
  }, [page, totalPages]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-lg">
        <Loading size="md" />
      </div>
    );
  }

  // ── Mobile ───────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="flex justify-center items-center" dir="rtl">
        <ShadcnPagination>
          <PaginationContent className="gap-0">
            {/* Next — RTL: next is on the right */}
            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                aria-disabled={page >= totalPages}
                className={cn(
                  'rounded-lg',
                  page >= totalPages
                    ? 'bg-base-300 pointer-events-none opacity-50'
                    : 'bg-primary text-white'
                )}
              />
            </PaginationItem>

            {/* Current / Total */}
            <PaginationItem>
              <span className="btn rounded-none border border-border px-4 text-sm">
                {page.toLocaleString('fa-IR')} / {totalPages.toLocaleString('fa-IR')}
              </span>
            </PaginationItem>

            {/* Previous — RTL: previous is on the left */}
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrevious}
                aria-disabled={page <= 1}
                className={cn(
                  'rounded-lg',
                  page <= 1 ? 'bg-base-300 pointer-events-none opacity-50' : 'bg-primary text-white'
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </ShadcnPagination>
      </div>
    );
  }

  // ── Desktop ──────────────────────────────────────────────────────────────
  return (
    <div className={cn('flex mx-auto mt-lg text-primary', className)} dir="rtl">
      <ShadcnPagination>
        <PaginationContent className="gap-sm flex-row-reverse">
          {/* Next — RTL: on the right */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              aria-disabled={page >= totalPages}
              className={cn(
                'rounded-lg border border-primary',
                page >= totalPages && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>

          {/* Pages */}
          {pageItems.map((item) =>
            item.type === 'ellipsis' ? (
              <PaginationItem key={item.id}>
                <PaginationEllipsis className="rounded-lg border border-primary w-10" />
              </PaginationItem>
            ) : (
              <PaginationItem key={item.value}>
                <PaginationLink
                  onClick={() => onPageChange(item.value)}
                  isActive={item.value === page}
                  aria-current={item.value === page ? 'page' : undefined}
                  className={cn(
                    'rounded-lg border border-primary w-10',
                    item.value === page
                      ? 'bg-primary text-white hover:bg-secondary'
                      : 'hover:bg-muted'
                  )}
                >
                  {convertToPersianDigits(String(item.value))}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          {/* Previous — RTL: on the left */}
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              aria-disabled={page <= 1}
              className={cn(
                'rounded-lg border border-primary',
                page <= 1 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </ShadcnPagination>
    </div>
  );
};

export default PaginationComponent;
