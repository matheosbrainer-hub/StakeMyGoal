'use client';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function GoalCelebration({ show, message='🎉', onClose }: any){
  const [visible, setVisible] = useState(show);
  useEffect(()=>{ setVisible(show); if (show){ const t=setTimeout(()=>{ setVisible(false); onClose&&onClose(); },4000); return ()=>clearTimeout(t);} },[show,onClose]);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <Confetti numberOfPieces={200} gravity={0.2} />
      <div className="pointer-events-auto bg-white text-black p-4 rounded-xl shadow-lg">{message}</div>
    </div>
  );
}
