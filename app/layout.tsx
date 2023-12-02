
import { Nunito } from 'next/font/google';
import { Navbar, ClientOnly } from '@/components';
import RegisterModal from '@/components/modal/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/modal/LoginModal';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';
import RentModal from '@/components/modal/RentModal';
import SearchModal from '@/components/modal/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currerntUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currerntUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
