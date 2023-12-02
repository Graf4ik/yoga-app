// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from "./data/socials";
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  icon: string;
  path: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  };
}
