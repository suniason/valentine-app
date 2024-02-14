import heartIcon from '@/public/heart.svg'
import cutie from '@/public/cutie.svg'
import backgroundImage from '@/public/bg.svg'

import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const parisienne = Great_Vibes({ subsets: ['latin'], weight: ['400'] })
const playfairdisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: '100%',
        height: '100%',
      }}
    >
      <main
        className={`w-full h-screen ${parisienne.className} flex justify-center items-center`}
      >
        <div className="bg-pink-100  p-10 rounded-3xl md:rounded-full h-9/12 w-9/12 md:w-1/2 outline outline-1 outline-red-500">
          <div className="flex items-center justify-center relative ">
            <div className="text-red-400 text-5xl md:text-7xl font-bold absolute text-center">
              Happy Valentine&apos;s Day
            </div>
            <Image
              priority
              src={heartIcon}
              alt="Valentine Heart"
              height={350}
              width={350}
            />
          </div>
          <hr className="border-2 border-red-500" />
          <div className="text-center flex flex-col items-center justify-center relative">
            <div
              className={`text-red-500 text-4xl my-10 font-semibold ${playfairdisplay.className}`}
            >
              Grateful for the meaningful chats and fun conversations with you.
            </div>
            <Image
              priority
              src={cutie}
              alt="Cute Animals "
              height={200}
              width={200}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
