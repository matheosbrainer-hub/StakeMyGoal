'use client';
import { useEffect, useState } from 'react';
export default function GoalStreak({ uid }: { uid: string }){
  const [streak, setStreak] = useState(0);
  useEffect(()=>{ /* placeholder: compute streak from user data */ setStreak(3); },[uid]);
  return (<div className="bg-slate-800 p-4 rounded"><h3 className="font-bold">🔥 Streak</h3><p className="text-2xl">{streak} days</p></div>)
}
