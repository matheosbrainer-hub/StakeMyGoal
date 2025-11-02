'use client';
import { useEffect, useState } from 'react';
import GoalForm from './GoalForm';
import GoalCard from './GoalCard';

export default function GoalDetail({ goalId }: { goalId: string }){
  const [goal, setGoal] = useState<any>(null);
  useEffect(()=>{
    // In a finished app you would fetch the goal from Firestore
    setGoal({
      id: goalId, title: 'Sample Goal', stake: 20, progress: 60, status: 'active', hasValidator: true, validatorEmail: 'val@example.com'
    });
  },[goalId]);
  if (!goal) return <p>Loading...</p>;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <GoalCard goal={goal} />
      <div className="mt-6"><h2 className="text-xl">Edit</h2><GoalForm uid={'demo-user'} /></div>
    </div>
  );
}
