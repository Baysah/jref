import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JRef URL Shortener',
  description: 'A URL shortener built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${inter.className} h-full`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
