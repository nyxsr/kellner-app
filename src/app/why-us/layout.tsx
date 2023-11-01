import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mengapa Kami ? | Kellner',
  description: 'Generated by create next app',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
