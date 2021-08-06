import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import type { NextApiRequest, NextApiResponse } from 'next';

console.log('process.env.AUTH0_CLIENT_ID: ', process.env.AUTH0_CLIENT_ID);
const options = {
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
  database: {
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
