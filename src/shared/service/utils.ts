import { IPaginationParams } from './interface.schema';

export const getPaginationParams = (params: Partial<IPaginationParams>) => {
  const { page, limit } = params;
  return {
    ...(page !== undefined && { page }),
    ...(limit !== undefined && { limit }),
  };
};
