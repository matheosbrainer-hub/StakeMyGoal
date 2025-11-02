import Link from 'next/link';
export default function Navbar(){ return (
  <nav className="w-full p-4 flex justify-between items-center bg-slate-900/80 border-b border-slate-800">
    <Link href="/" legacyBehavior><a className="text-2xl font-bold text-blue-400">StakeMyGoal</a></Link>
    <div className="space-x-4">
      <Link href="/dashboard" legacyBehavior><a className="text-gray-300">Dashboard</a></Link>
      <Link href="/terms" legacyBehavior><a className="text-gray-300">Terms</a></Link>
      <Link href="/privacy" legacyBehavior><a className="text-gray-300">Privacy</a></Link>
    </div>
  </nav>
)}