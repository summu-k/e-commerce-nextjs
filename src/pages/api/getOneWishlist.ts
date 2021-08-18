import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { table, minifyRecords } from './utils/airtable.js';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const record = await table.select({ filterByFormula: `productId = '${id}'` }).firstPage();
    res.statusCode = 200;
    res.json(minifyRecords(record));
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: error.message });
  }
});
