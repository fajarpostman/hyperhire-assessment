import { NextApiRequest, NextApiResponse } from 'next';
import sampleData from './sampleData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sampleData);
}
