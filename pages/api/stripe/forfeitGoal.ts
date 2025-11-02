import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse){
  const { goalId, penalty } = req.body;
  // Placeholder: adjust transactions, record penalty
  res.status(200).json({ success: true, goalId, penalty });
}
