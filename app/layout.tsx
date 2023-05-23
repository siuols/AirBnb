import './globals.css'
import { Inter, Nunito } from 'next/font/google'
import Navbar from '@components/navbar/Navbar'
import ClientOnly from '@components/ClientOnly'
import RegisterModal from '@components/modal/RegisterModal'
import LoginModal from '@components/modal/LoginModal'
import ToasterProvider from '@providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '@components/modal/RentModal'
import SearchModal from '@components/modal/SearchModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  )
}
