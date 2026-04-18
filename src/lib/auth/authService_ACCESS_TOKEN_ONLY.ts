import {
  tokenPersister,
  refreshTokenPersister,
} from '@/lib/persisters/tokenPersister_ACCESS_TOKEN_ONLY';

class AuthService {
  private listeners: ((token: string | null) => void)[] = [];

  getToken(): string | null {
    return tokenPersister.get() || null;
  }

  setToken(token: string): void {
    if (this.getToken() === token) return;

    tokenPersister.set(token);
    this.notify(token);
  }

  deleteToken(): void {
    if (!this.getToken()) return;

    tokenPersister.delete();
    this.notify(null);
  }

  getRefreshToken(): string | null {
    return refreshTokenPersister?.get?.() || null; // safe even if persister missing
  }

  setRefreshToken(token: string): void {
    refreshTokenPersister?.set?.(token);
  }

  deleteRefreshToken(): void {
    refreshTokenPersister?.delete?.();
  }

  // refreshToken is now optional
  setSession(accessToken: string, refreshToken?: string): void {
    this.setToken(accessToken);
    if (refreshToken !== undefined) {
      if (refreshToken) {
        this.setRefreshToken(refreshToken);
      } else {
        this.deleteRefreshToken();
      }
    }
    // if refreshToken arg omitted entirely, leave existing refresh token alone
  }
  clearSession(): void {
    this.deleteToken();
    this.deleteRefreshToken();
  }
  subscribe(listener: (token: string | null) => void): () => void {
    this.listeners.push(listener);
    return () => this.unsubscribe(listener);
  }
  unsubscribe(listener: (token: string | null) => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }
  private notify(token: string | null) {
    this.listeners.forEach((l) => l(token));
  }
}

export default new AuthService();
