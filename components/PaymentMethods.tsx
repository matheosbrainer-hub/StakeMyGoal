'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function PaymentMethods(){ const [methods,setMethods]=useState<any[]>([]); useEffect(()=>{ setMethods([]); },[]); const add=()=>alert('Add flow'); return (
  <div className="max-w-lg mx-auto bg-slate-800 p-4 rounded">
    <h3 className="font-bold">Payment Methods</h3>
    <ul>{methods.length?methods.map(m=><li key={m.id}>{m.brand} ****{m.last4}</li>):<li className="text-gray-400">No payment methods</li>}</ul>
    <button onClick={add} className="mt-2 bg-green-600 p-2 rounded">Add Payment Method</button>
  </div>
) }
