// // ./src/lib/auth/authService.ts
// import { tokenPersister } from '@/lib/persisters/tokenPersister_ACCESS_TOKEN_ONLY';

// class AuthService {
//   private listeners: ((token: string | null) => void)[] = [];

//   getToken(): string | null {
//     const token = tokenPersister.get();
//     return token || null;
//   }

//   setToken(token: string): void {
//     tokenPersister.set(token);
//     this.notify(token);
//   }

//   deleteToken(): void {
//     tokenPersister.delete();
//     this.notify(null);
//   }

//   subscribe(listener: (token: string | null) => void): void {
//     this.listeners.push(listener);
//   }

//   unsubscribe(listener: (token: string | null) => void): void {
//     this.listeners = this.listeners.filter((l) => l !== listener);
//   }

//   private notify(token: string | null) {
//     this.listeners.forEach((listener) => listener(token));
//   }
// }

// export default new AuthService();
