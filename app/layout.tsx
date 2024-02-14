
import { Nunito } from 'next/font/google';
import { Navbar, ClientOnly } from '@/components';
import ToasterProvider from '@/providers/ToasterProvider';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';
import ModalProvider from '@/providers/ModalProvider';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

// export const metadata = {
//   title: 'Airbnb',
//   description: 'Airbnb clone',
// }
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    }
  ]
};

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
          <ModalProvider />
          <Navbar currentUser={currerntUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
