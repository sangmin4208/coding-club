import { Challenge } from '@type/challenge'
import React from 'react'

interface ChallengeItemProp {
  challenge: Challenge
  className?: string
}


const Category = ({ category }: { category: string }) => {
  return <span className=' bg-gray-600 text-white text-sm  p-1 pt-1 pb-1 inline-block rounded-lg'>{category}</span>
}

const difficultyColor = {
  'hard': 'bg-red-500',
  'medium': 'bg-pink-500',
  'easy': 'bg-lime-600',
}

function ChallengeItem({ challenge, className }: ChallengeItemProp) {
  const difficultyBg = () => {

  }
  return (
    <li className={`${className} border border-white border-t-neutral-100 mb-4 rounded-md p-5 relative`}>
      <h3 className='mb-2 text-xl'>{challenge.title}</h3>
      <div className='flex justify-between gap-1'>
        <div className='flex gap-1'>
          <span className={`${difficultyColor[challenge.difficulty]}` + ' text-white text-sm  p-1 pt-1 pb-1 inline-block rounded-lg'}>{challenge.difficulty}</span>
          {challenge.categories && challenge.categories.map(category => <Category key={category} category={category} />)}
        </div>
        <a className=' bg-orange-500 p-1 rounded-lg text-xs cursor-pointer'>Go LeetCode</a>
      </div>
    </li >
  )
}

export default ChallengeItem