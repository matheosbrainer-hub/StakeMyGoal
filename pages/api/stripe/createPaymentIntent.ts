import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse){
  // Placeholder: create Stripe PaymentIntent server-side in production
  const { goalId, amount } = req.body;
  res.status(200).json({ clientSecret: 'test_client_secret', goalId, amount });
}
