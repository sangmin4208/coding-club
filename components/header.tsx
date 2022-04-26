import { motion } from 'framer-motion'
const Header = () => {
  return <header className="py-5">
    <h1 className='text-xl'>
      <motion.span className='inline-block' initial={{ rotate: -180 }} animate={{ rotate: 0 }}>Coding Club</motion.span>
    </h1>
  </header>
}

export default Header