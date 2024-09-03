"use client"
import React from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveDrawer>
          {children}
        </ResponsiveDrawer>
      </body>
    </html>
  );
}