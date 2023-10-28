import '@/styles/global.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Root from '@/components/provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Announcement from '@/components/announcement';
import Link from 'next/link';
import MobileMenu from '@/components/mobileMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ТД Поликом - Строительная компания',
  description: 'ТД Поликом - Строительная компания в Череповце.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Root>
          <Announcement>
            <Link href='#' style={{ marginRight: '50px', fontWeight: '500' }}>
              Запишись на прием до 29/08/2023 и получи скидку 15% на все услуги!
            </Link>
          </Announcement>
          <Header />
          {children}
          <Footer />
          <MobileMenu />
        </Root>
      </body>
    </html>
  );
}
