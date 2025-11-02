'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firestore';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function GoalForm({ uid }: { uid: string }){
  const [title, setTitle] = useState('');
  const [stake, setStake] = useState<number>(0);
  const [useValidator, setUseValidator] = useState(true);
  const [validatorEmail, setValidatorEmail] = useState('');
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const calculatedFee = useValidator ? 2 : 3.5;
    setFee(calculatedFee);
    setTotal(stake + calculatedFee);
  },[stake, useValidator]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || stake <= 0) return toast.error('Enter title and stake');
    try{
      const goalRef = await addDoc(collection(db, 'goals'), {
        userId: uid,
        title,
        stake,
        fee,
        total,
        hasValidator: useValidator,
        validatorEmail: useValidator ? validatorEmail : null,
        status: 'pending_payment',
        createdAt: Timestamp.now(),
      });
      // Create payment session
      const res = await axios.post('/api/stripe/createPaymentIntent', { goalId: goalRef.id, amount: total });
      if (res.data.clientSecret) {
        toast.success('Payment intent created. Use Stripe in frontend to confirm.');
      } else {
        toast.success('Goal created. Complete payment via Stripe.');
      }
      setTitle(''); setStake(0); setValidatorEmail('');
    }catch(err:any){
      console.error(err); toast.error('Failed to create goal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-slate-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold">Set a New Goal</h2>
      <div><label className="block mb-1">Goal Title</label><input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-2 rounded-lg text-black" /></div>
      <div><label className="block mb-1">Stake (£)</label><input type="number" value={stake} onChange={e=>setStake(Number(e.target.value))} className="w-full p-2 rounded-lg text-black" /></div>
      <div><label className="flex items-center space-x-2"><input type="checkbox" checked={useValidator} onChange={e=>setUseValidator(e.target.checked)} /><span>Use a validation partner (£2 fee) / (£3.50 without)</span></label></div>
      {useValidator && <div><label>Validator Email</label><input type="email" value={validatorEmail} onChange={e=>setValidatorEmail(e.target.value)} className="w-full p-2 rounded-lg text-black" /></div>}
      <div className="flex justify-between font-semibold"><span>Platform Fee: £{fee}</span><span>Total to Pay: £{total}</span></div>
      <button type="submit" className="w-full bg-green-600 p-2 rounded-lg font-bold hover:bg-green-700">Submit & Pay</button>
    </form>
  );
}
