// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import {socials} from "./data/socials";

// interface Data {
//   id: number;
//   icon: string;
//   path: string;
// }

export default function handler() {
  res.status(200).json(socials)
}
