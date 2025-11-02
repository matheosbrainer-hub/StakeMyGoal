'use client';
import { useEffect, useState } from 'react';
export default function LeaderboardRealtime(){ const [leaders,setLeaders]=useState<any[]>([]); useEffect(()=>{ setLeaders([ {uid:'u1', displayName:'Alice', totalEarned:120}, {uid:'u2', displayName:'Bob', totalEarned:90} ]); },[]); return (
  <div className="bg-slate-800 p-4 rounded"><h3 className="font-bold">🏆 Leaderboard</h3><ol>{leaders.map((l,i)=><li key={l.uid}>{i+1}. {l.displayName} - £{l.totalEarned}</li>)}</ol></div>
)}