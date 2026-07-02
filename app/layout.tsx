import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'سنگ شکن دکتر اصغر فرهادی | رزرو نوبت سنگ شکنی',
  description: 'رزرو نوبت سنگ شکنی و نوبت ویزیت بیماران سنگ کلیه - دکتر اصغر فرهادی'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}