import type { Metadata } from 'next';
import '@/globals.css';
import Navbar from '@/shared/layout/Navbar';
import Footer from '@/shared/layout/Footer';
import QueryProvider from '@/lib/QueryProvider';
import { AuthProvider } from '@/context/AuthContext_ACCESS_TOKEN_ONLY';

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
  return (
    <html lang="en">
      <body data-theme="mytheme">
        <QueryProvider>
          <AuthProvider>
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
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
