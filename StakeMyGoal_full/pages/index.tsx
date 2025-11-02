import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home(){
  return (
    <div>
      <Head><title>StakeMyGoal</title></Head>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <section className="py-12"><div className="max-w-4xl mx-auto text-center text-gray-300">Join, stake, and reach your goals.</div></section>
      </main>
    </div>
  )
}
