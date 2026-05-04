// lib/persisters/tokenPersister.ts
'use client';

import DualPersister from './DualPersister';

export const tokenPersister = new DualPersister(process.env.NEXT_PUBLIC_TOKEN_KEY_NAME ?? 'access');
export const refreshTokenPersister = new DualPersister(
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY_NAME ?? 'refresh'
);
