class AuthService {
  private tokenKey: string = process.env.NEXT_PUBLIC_TOKEN_KEY_NAME || 'token';

  private subscribers: Array<(token: string | null) => void> = [];

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.notify(token);
  }

  deleteToken(): void {
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
