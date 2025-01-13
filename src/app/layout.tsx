// import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '@/globals.css';
import Navbar from '@/shared/component/layout/Navbar';
import Footer from '@/shared/component/layout/Footer';
import SidebarWrapper from '@/shared/component/layout/SidebarWrapper';
import QueryProvider from '@/lib/QueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// FONT CONFIGURATION
// const customFont = localFont({
// THIS CAN BE AN ARRAY TOO, CHECK NEXT DOCS
// src: "./",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ADD THIS CLASS TO HTML ELEMENT FOR ADDING THE FONT className={customFont.className}
    <html lang="en">
      <body>
        <QueryProvider>
          <Navbar
            title="NAVBAR"
            items={[
              { linkURL: '/about', title: 'about' },
              {
                parent: 'parent',
                children: [{ linkURL: '/about', title: 'about in parent' }],
              },
            ]}
          />
          <main>
            <SidebarWrapper />
            {children}
          </main>
          <Footer
            linkGroups={[
              {
                title: 'dummy',
                links: [
                  { title: 'd1', url: '/d1' },
                  { title: 'd2', url: '/d2' },
                  { title: 'd3', url: '/d3' },
                  { title: 'd4', url: '/d4' },
                ],
              },
              {
                title: 'silly',
                links: [
                  { title: 's1', url: '/s1' },
                  { title: 's2', url: '/s2' },
                  { title: 's3', url: '/s3' },
                  { title: 's4', url: '/s4' },
                ],
              },
            ]}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
