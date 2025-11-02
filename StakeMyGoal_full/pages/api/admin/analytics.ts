import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  res.status(200).json({ totalUsers: 10, totalGoals: 24, totalStaked: 1200, totalPayout: 800, totalTransactions: 40 });
}
