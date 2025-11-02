'use client';
import { useEffect, useState } from 'react';
export default function Achievements({ uid }: { uid: string }){
  const [ach, setAch] = useState<any[]>([]);
  useEffect(()=>{
    setAch([ {id:'first', title:'First Goal', unlocked:true}, {id:'five', title:'5 Goals', unlocked:false} ])
  },[uid]);
  return (
    <div className="bg-slate-800 p-4 rounded space-y-2">
      <h3 className="font-bold">🏅 Achievements</h3>
      <ul>{ach.map(a=> <li key={a.id} className={a.unlocked? 'text-green-400':'text-gray-300'}>{a.title} {a.unlocked? '✅':''}</li>)}</ul>
    </div>
  )
}
