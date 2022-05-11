import React, { createContext, ReactNode, useReducer } from 'react'
import { challengeReducer } from './reducer'
interface ChallengeContextValue {
  state: any
  dispatch: any
}

export const ChallengeContext = createContext<ChallengeContextValue>({ state: null, dispatch: null })

interface ChallengeProviderProps {
  children: ReactNode
}

const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const [state, dispatch] = useReducer(challengeReducer, {})
  return <ChallengeContext.Provider value={{ state, dispatch }}>{children}</ChallengeContext.Provider>
}

export default ChallengeProvider
