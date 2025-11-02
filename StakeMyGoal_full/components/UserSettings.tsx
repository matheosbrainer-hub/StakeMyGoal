'use client';
import { useEffect, useState } from 'react';
export default function UserSettings({ uid }: { uid: string }){
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  useEffect(()=>{ setDisplayName('Demo User'); setEmail('demo@example.com'); },[uid]);
  const save = ()=> alert('Saved');
  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-800 rounded space-y-4">
      <h2 className="text-2xl font-bold">User Settings</h2>
      <input value={displayName} onChange={e=>setDisplayName(e.target.value)} className="w-full p-2 rounded" />
      <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 rounded" />
      <label className="flex items-center"><input type="checkbox" checked={notificationsEnabled} onChange={e=>setNotificationsEnabled(e.target.checked)} /> <span className="ml-2">Enable notifications</span></label>
      <button onClick={save} className="w-full bg-blue-600 p-2 rounded">Save Settings</button>
    </div>
  )
}
