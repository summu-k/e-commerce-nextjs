import type { NextApiRequest, NextApiResponse } from 'next';
import webAppAxios from '../../../httpClient/index';
import { userProps } from '../../../utils/interfaces';

export async function authenticateUser(email: string, password: string) {
  const url = '/api/users/authenticate';
  const userInfo = await webAppAxios.post(url, { email, password });
  return userInfo;
}

export default function handler(req: NextApiRequest, res: NextApiResponse, email: string, password: string) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = authenticateUser(email, password);
    res.status(200).json(products);
  }
}

export async function registerUser({ body }: userProps) {
  const userRegisterUrl = '/api/users/register';
  const allProducts = await webAppAxios.post(userRegisterUrl, body);
  return allProducts.data;
}
