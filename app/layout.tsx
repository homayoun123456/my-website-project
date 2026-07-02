import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'سنگ شکن دکتر اصغر فرهادی | رزرو نوبت ویزیت',
  description: 'سنگ شکن کلیه، سنگ شکن حالب، سنگ شکن مثانه - دکتر اصغر فرهادی'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}