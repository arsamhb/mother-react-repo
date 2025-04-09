class AuthService {
  private tokenKey: string = process.env.NEXT_PUBLIC_TOKEN_KEY_NAME || 'token';

  private subscribers: Array<(token: string | null) => void> = [];

  private isClient(): boolean {
    return typeof window !== 'undefined';
  }

  getToken(): string | null {
    if (!this.isClient()) return null;
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    if (!this.isClient()) return;
    localStorage.setItem(this.tokenKey, token);
    this.notify(token);
  }

  deleteToken(): void {
    if (!this.isClient()) return;
    localStorage.removeItem(this.tokenKey);
    this.notify(null);
  }

  subscribe(callback: (token: string | null) => void): void {
    this.subscribers.push(callback);
  }

  unsubscribe(callback: (token: string | null) => void): void {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  }

  private notify(token: string | null): void {
    this.subscribers.forEach((cb) => cb(token));
  }
}

const authService = new AuthService();
export default authService;
