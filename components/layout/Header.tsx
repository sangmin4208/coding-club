import { auth } from '@lib/firbase'
import { signOut } from 'firebase/auth'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
const Header = () => {
  const [user] = useAuthState(auth)
  return <header className="flex justify-between py-5">
    <h1 className='text-xl'>
      <Link href="/" passHref>
        <motion.span className='inline-block cursor-pointer' initial={{ rotate: -180 }} animate={{ rotate: 0 }}>Coding Club</motion.span>
      </Link>
    </h1>
    {user && <div className='flex gap-2'>
      <button>
        <Link href={"/SignIn"}>{user.displayName}</Link>
      </button>
      <button onClick={() => { signOut(auth) }}>
        Logout
      </button>
    </div>}

    {!user && <button>
      <Link href={"/SignIn"}>Login</Link>
    </button>}

  </header>
}

export default Header