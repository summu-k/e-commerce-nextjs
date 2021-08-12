import { table } from './utils/airtable.js';

export default async (req, res) => {
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
