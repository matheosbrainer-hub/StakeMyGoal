import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse){
  // Placeholder: in production create transfer via Stripe
  const { goalId } = req.body;
  res.status(200).json({ success: true, goalId });
}
