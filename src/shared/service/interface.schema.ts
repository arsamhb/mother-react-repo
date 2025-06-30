export interface IIdNameObject {
  id: string;
  name: string;
}

export interface IKeyValueObject {
  key: string;
  value: string;
}

export interface IPaginationParams {
  page: number;
  limit: number;
}

export type Roles = 'ADMIN' | 'USER';
