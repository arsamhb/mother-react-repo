// lib/persisters/DualPersister.ts
'use client';

import LocalStoragePersister from '.';

class DualPersister {
  private lsPersister: LocalStoragePersister;
  private cookieName: string;

  constructor(key: string, cookieMaxAge = 60 * 60 * 24 * 7) {
    this.lsPersister = new LocalStoragePersister(key);
    this.cookieName = key;
    this.cookieMaxAge = cookieMaxAge;
  }

  private cookieMaxAge: number;

  public set(value: string): void {
    this.lsPersister.set(value);
    document.cookie = `${this.cookieName}=${value}; path=/; max-age=${this.cookieMaxAge}; SameSite=Lax`;
  }

  public get(): string {
    const ls = this.lsPersister.get();
    if (ls) return ls;
    // cookie fallback
    const match = document.cookie.match(new RegExp(`(?:^|; )${this.cookieName}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : '';
  }
  public delete(): void {
    this.lsPersister.delete();
    document.cookie = `${this.cookieName}=; path=/; max-age=0`;
  }
}

export default DualPersister;
