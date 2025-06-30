export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  totalPages: number;
}
