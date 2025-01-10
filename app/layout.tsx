import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/header'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Xliich Network',
  description: 'Welcome to Xliich Network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-[#101010] text-white`}>
        <Header />
        <main className="motion-safe:animate-fadeIn">{children}</main>
      </body>
    </html>
  )
}

