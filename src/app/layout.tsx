import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MSA Accountants',
  description: 'Complete solutions for accounting, taxation, and business advisory services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}