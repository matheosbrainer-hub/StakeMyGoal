'use client';
import { useEffect, useState } from 'react';
export default function NotificationsCenter({ uid }: { uid: string }){
  const [notes,setNotes]=useState<any[]>([]);
  useEffect(()=>{ setNotes([ {id:'n1', message:'Validator requested approval'}, {id:'n2', message:'Payout completed'} ]); },[uid]);
  return (
    <div className="bg-slate-800 p-4 rounded max-w-lg mx-auto">
      <h3 className="font-bold">🔔 Notifications</h3>
      <ul>{notes.map(n=> <li key={n.id} className="py-1">{n.message}</li>)}</ul>
    </div>
  );
}
