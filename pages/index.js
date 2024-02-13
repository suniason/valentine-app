import ValentineForm from '@/components/form'
import heartIcon from '@/public/heart.svg'
import lovebirds from '@/public/lovebirds.svg'

import { Great_Vibes, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const parisienne = Great_Vibes({ subsets: ['latin'], weight: ['400'] })
const playfairdisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <main className={`pt-5 px-10 ${parisienne.className}`}>
      <div className="text-center flex flex-col items-center ">
        <div className="text-white text-5xl md:text-7xl font-bold">
          Happy Valentine&apos;s Day
        </div>
        <div className="text-white text-xl md:text-4xl ">
          to you and your loved ones
        </div>
      </div>
      <div className={`grid md:grid-cols-2`}>
        <div className="flex items-center justify-center md:order-last">
          <Image
            priority
            src={heartIcon}
            alt="Valentine Heart"
            height={500}
            width={500}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div
            className={`relative bg-white p-5 w-fit  rounded-lg  ${playfairdisplay.className} w-9/12 md:w-1/2`}
          >
            <Image
              priority
              src={lovebirds}
              alt="Valentine Heart"
              height={50}
              width={50}
              className="absolute top-3 right-3"
            />
            <ValentineForm />
          </div>
        </div>
      </div>
    </main>
  )
}
