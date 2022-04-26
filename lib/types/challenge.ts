export interface Challenge {
  id: number
  title: string
  leetCodeLink: string
  solutionLink?: string
  difficulty: Difficulty
  categories?: string[]
  reviewAt: Date
  createAt: Date
  updateAt: Date
}

type Difficulty = 'easy' | 'medium' | 'hard'
