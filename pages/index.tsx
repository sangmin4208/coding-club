import type { NextPage } from 'next'
import Head from 'next/head'
import { ChallengeContext } from '@context/challenge'
import { useContext } from 'react'

const Home: NextPage = () => {
  const { challenges } = useContext(ChallengeContext)
  return (
    <>
      <Head>
        <title>Coding Club | Home</title>
      </Head>
      <div className="flex gap-2">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold underline">
            Coding Challenge
          </h1>
          <p>
            LeetCode 문제를 풀고 매주 수요일, 목요일 Gather Town에서 리뷰 진행하고 있습니다.
          </p>
        </div>
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold underline">
            리뷰 예정 문제
          </h1>
          <ul>
            {challenges && challenges.map(item => <li key={item.id}>
              <a href={item.leetCodeLink}
                target='_blank' rel="noreferrer">{item.title}</a>
            </li>)}
          </ul>

        </div>
      </div>

    </>
  )
}

export default Home
