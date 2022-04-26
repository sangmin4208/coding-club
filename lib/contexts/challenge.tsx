import React, { createContext, ReactNode } from 'react'
import { Challenge } from '@type/challenge'
import { challenges } from '@mock/challenges'
interface ChallengeContextValue {
  challenges: Challenge[]
}

export const ChallengeContext = createContext<ChallengeContextValue>(
  { challenges }
)

interface ChallengeProviderProps {
  children: ReactNode
}

const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  return <ChallengeContext.Provider value={{ challenges }}>{children}</ChallengeContext.Provider>
}

export default ChallengeProvider
