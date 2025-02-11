import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Happy Valentine&apos;s Day</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
