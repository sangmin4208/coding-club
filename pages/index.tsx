import type { NextPage } from 'next'
import Head from 'next/head'
import { ChallengeContext } from '@context/challenge'
import { useContext } from 'react'
import ReviewList from '@component/challenge/ReviewList'
import Intro from '@component/challenge/Intro'

const Home: NextPage = () => {
  const { challenges } = useContext(ChallengeContext)
  return (
    <>
      <Head>
        <title>Coding Club | Home</title>
      </Head>
      <div className="flex gap-2 ">
        <Intro />
        <ReviewList className='flex-1' challenges={challenges} />
      </div>
    </>
  )
}

export default Home
