// import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

import { table, minifyRecords } from './utils/airtable.js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const records = await table.select({}).firstPage();
    const formattedRecords = minifyRecords(records);
    res.statusCode = 200;
    res.json(formattedRecords);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: error.message });
  }
};
