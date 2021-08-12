import type { NextApiRequest, NextApiResponse } from 'next';

const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const records = await table.select({}).firstPage();
  res.statusCode = 200;
  res.json(records);

  // .eachPage(
  //   (records: any[], fetchNextPage: () => void) => {
  //     // This function (`page`) will get called for each page of records.

  //     records.forEach((record) => {
  //       console.log('Retrieved', record.get('name'));
  //     });

  //     // To fetch the next page of records, call `fetchNextPage`.
  //     // If there are more records, `page` will get called again.
  //     // If there are no more records, `done` will get called.
  //     fetchNextPage();
  //   },
  //   (err: any) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //   }
  // );
};
