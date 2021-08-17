// import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { table } from './utils/airtable.js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const deletedRecord = await table.destroy([id]);
    res.statusCode = 200;
    res.json(deletedRecord[0]);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: error.message });
  }
};
