import { NextApiRequest, NextApiResponse } from 'next';
import { socials } from './data/socials';

interface Data {
  id: number;
  icon: string;
  path: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
}
