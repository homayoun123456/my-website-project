import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'سنگ شکن دکتر اصغر فرهادی | رزرو نوبت ویزیت',
  description: 'سنگ شکن کلیه و حالب - دکتر اصغر فرهادی - رزرو نوبت آنلاین'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  );
}