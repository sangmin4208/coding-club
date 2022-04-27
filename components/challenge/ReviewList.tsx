import { Challenge } from '@type/challenge'
import React from 'react'
import ChallengeItem from './ChallengeItem'

interface ReviewListProp {
  className?: string
  challenges: Challenge[]
}

export default function ReviewList({ challenges, className }: ReviewListProp) {
  return (
    <section className={className}>
      <div className='p-5'>
        <h1 className="text-3xl font-bold underline mb-3">
          리뷰 예정 문제
        </h1>
        <ul>
          {challenges && challenges.map(item => <ChallengeItem key={item.id} challenge={item} />)}
        </ul>
      </div>
    </section>
  )
}
