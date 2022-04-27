import React from 'react'
interface IntroProp {
  className?: string
}

function Intro({ className }: IntroProp) {
  return (
    <section className={className}>
      <div className="border-2 p-5">
        <h1 className="text-3xl font-bold underline">
          Coding Challenge
        </h1>
        <p>
          LeetCode 문제를 풀고 매주 수요일, 목요일 Gather Town에서 리뷰 진행하고 있습니다.
        </p>
      </div>
    </section>

  )
}

export default Intro