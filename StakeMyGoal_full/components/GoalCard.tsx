'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GoalCelebration from './GoalCelebration';

export default function GoalCard({ goal }: any){
  const [status, setStatus] = useState(goal?.status || 'active');
  const [show, setShow] = useState(false);
  const stake = goal?.stake || 0;

  const handleComplete = async ()=>{
    // In real app call API
    if (goal.hasValidator) {
      alert('Sent request to validator');
      setStatus('pending_validation');
    } else {
      setStatus('payout_processing');
      setShow(true);
    }
  };

  const handleForfeit = async ()=>{
    if (!confirm('Forfeit and lose 25%?')) return;
    setStatus('forfeited');
    alert('Forfeited');
  };

  return (
    <motion.div className="bg-slate-800 rounded-2xl p-4 shadow-lg">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{goal.title}</h3>
        <span className="text-sm text-gray-400">£{stake}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2 my-3"><motion.div className="h-2 rounded-full bg-blue-500" initial={{width:0}} animate={{width:`${goal.progress || 0}%`}} transition={{duration:1}} /></div>
      <div className="flex gap-2">
        <button onClick={handleComplete} className="flex-1 bg-green-600 p-2 rounded">Complete</button>
        <button onClick={handleForfeit} className="flex-1 bg-red-600 p-2 rounded">Forfeit</button>
      </div>
      {show && <GoalCelebration show={show} message={'🎉 Goal Completed!'} onClose={()=>setShow(false)} />}
    </motion.div>
  )
}
