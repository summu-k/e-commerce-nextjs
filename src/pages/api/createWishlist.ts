/* eslint-disable camelcase */
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { table } from './utils/airtable.js';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { product_name, images, brand, sale_price, productId } = req.body;
  try {
    const user = getSession(req, res);
    const createdRecords = await table.create([
      { fields: { product_name, productId, userId: user?.user.sub, brand, images, sale_price } },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: error.message });
  }
});
