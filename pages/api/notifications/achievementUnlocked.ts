import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  // Simple placeholder: In prod, use env SMTP to send email
  res.status(200).json({ success: true });
}
