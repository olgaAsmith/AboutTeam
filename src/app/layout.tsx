import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import React from 'react';

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'About Team',
  description: 'Small App about Team'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
