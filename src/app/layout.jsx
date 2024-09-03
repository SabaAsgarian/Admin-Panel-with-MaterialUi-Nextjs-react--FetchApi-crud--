"use client"
import { usePathname } from 'next/navigation';
import ResponsiveDrawer from './components/ResponsiveDrawer';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {pathname === '/' ? (
          children
        ) : (
          <ResponsiveDrawer>{children}</ResponsiveDrawer>
        )}
      </body>
    </html>
  );
}