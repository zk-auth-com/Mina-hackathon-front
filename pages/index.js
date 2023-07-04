import Image from 'next/image'
import { Inter } from 'next/font/google'
import GoogleLoginButton from '../components/GoogleLoginButton';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-center mb-24 text-3xl font-bold'>Google Autentification Keys</h1>
      <GoogleLoginButton />
    </main>
  )
}
