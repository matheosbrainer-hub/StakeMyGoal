import { motion } from 'framer-motion';
export default function HeroSection(){ return (
  <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold mb-4">Bet on Yourself with <span className="text-blue-400">StakeMyGoal</span></motion.h1>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="max-w-2xl text-gray-300">Commit to your goals, stake money, and prove you can do it — or lose your stake. Gamified, playful, and effective accountability.</motion.p>
  </section>
)}