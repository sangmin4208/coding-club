import type { AppProps } from 'next/app'
import Header from '@component/layout/Header'
import Footer from '@component/layout/Footer'
import ChallengeProvider from '@context/challenge'
import "@styles/globals.css"

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
