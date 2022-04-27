import type { AppProps } from 'next/app'
import Header from '@component/Header'
import Footer from '@component/Footer'
import "../styles/globals.css"
import ChallengeProvider from '@context/challenge'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-neutral-900 text-neutral-50'>
      <div className="flex flex-col container mx-auto px-8 min-h-screen">
        <Header />
        <main>
          <ChallengeProvider>
            <Component {...pageProps} />
          </ChallengeProvider>
        </main>
        <Footer className='justify-self-end' />
      </div>
    </div>

  )
}

export default MyApp
