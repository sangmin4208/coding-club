import type { NextPage } from 'next'
import Head from 'next/head'
import { ChallengeContext } from '@context/challenge'
import { useContext } from 'react'
import Intro from '@component/challenge/Intro'
import ChallengeList from '@component/challenge/ChallengeList'
import ChallengeItem from '@component/challenge/ChallengeItem'

const Home: NextPage = () => {
  const { challenges } = useContext(ChallengeContext)
  return (
    <>
      <Head>
        <title>Coding Club | Home</title>
      </Head>
      <div className="flex gap-2 ">
        <Intro />
        <ChallengeList className='flex-1 p-5' title="리뷰 예정 문제">
          <ul>
            {challenges.map(item => <ChallengeItem key={item.id} challenge={item} />)}
          </ul>
        </ChallengeList>
      </div>
      <div>
        <ChallengeList className='flex-1 p-5' title="지난 문제">
          <ul>
            {challenges.map(item => <ChallengeItem key={item.id} challenge={item} />)}
          </ul>
        </ChallengeList>
      </div>
    </>
  )
}

export default Home
