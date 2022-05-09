import { auth, firestore } from '@lib/firbase'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth'
function SignIn() {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth)
  const router = useRouter()
  useEffect(() => {
    if (!user?.user) return
    router.push("/")
  }, [user, router])
  const githubSignIn = async () => {
    await signInWithGithub()
  }
  return (
    <>
      {/* TODO Spinner로 변경 */}
      {loading && <p>Loading...</p>}
      {error && <p>에러가 발생했습니다 :(</p>}
      <button onClick={githubSignIn}> GitHub Login</button >
    </>

  )
}

export default SignIn