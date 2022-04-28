import { ReactNode } from "react"

interface ChallengeListProp {
  title: string,
  className?: string,
  children: ReactNode
}
const ChallengeList = ({ title, className, children }: ChallengeListProp) => {
  return (
    <section className={className}>
      <h1 className="text-3xl font-bold underline mb-3">{title}</h1>
      {children}
    </section>
  )
}

export default ChallengeList