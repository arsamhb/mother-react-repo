import type { Metadata } from 'next';
import '@/globals.css';
import Navbar from '@/shared/layout/Navbar';
import Footer from '@/shared/layout/Footer';
import QueryProvider from '@/lib/QueryProvider';
import { AuthProvider } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';
import { NotificationProvider } from '../lib/notification/NotificationProvider';

export const metadata: Metadata = {
  title: { default: 'AAWIZ', template: '%s | AAWIZ' },
  description: 'AAWIZ — AI powered HR solutions',
  keywords: ['AAWIZ', 'Arsam Bakhtyari', 'React', 'Next.js', 'AI', 'HR'],
  authors: [{ name: 'Arsam Bakhtyari', url: 'https://www.linkedin.com/in/arsam-bakhtyari-dev/' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initTheme = `
  (function () {
    try {
      var saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
        return;
      }
      var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = isDark ? 'mytheme-dark' : 'mytheme';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {}
  })();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body>
        <QueryProvider>
          <AuthProvider>
            <NotificationProvider>
              <Navbar
                title="AAWIZ"
                itemsLeft={[
                  { linkURL: '/form', title: 'form' },
                  { linkURL: '/dashboard', title: 'dashboard' },
                ]}
              />
              <main>{children}</main>
              <Footer
                linkGroups={[
                  {
                    title: 'MY LINKS',
                    links: [
                      {
                        title: 'LINKEDIN',
                        url: 'https://www.linkedin.com/in/arsam-bakhtyari-dev/',
                      },
                      { title: 'GITHUB', url: 'https://github.com/arsamhb' },
                      { title: 'STRAVA', url: 'https://www.strava.com/athletes/90562407' },
                    ],
                  },
                ]}
              />
            </NotificationProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
