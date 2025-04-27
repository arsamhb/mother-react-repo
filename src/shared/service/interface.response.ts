export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  count: number;
}
