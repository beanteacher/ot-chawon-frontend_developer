import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'OT-CHAWON Day10 Demo',
  description: 'Frontend skeleton for day10 deliverable',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
