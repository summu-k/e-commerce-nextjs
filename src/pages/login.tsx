import { List, ListItem, Typography, TextField, Button, Link, Grid } from '@material-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect, FC } from 'react';
import Cookies from 'js-cookie';
import GoogleButton from 'react-google-button';
import { AuthContextType } from '../utils/interfaces';
import { authenticateUser } from './api/users';
import { WishlistContext } from '../contexts/WishlistContext';

type ComponentProps = React.PropsWithChildren<{}>;

const Login: FC<ComponentProps> = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(WishlistContext) as AuthContextType;
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authenticateUser(email, password);
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push((redirect || '/') as string);
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };
  return (
    <Grid className="mt-1 productListingWrapper mx-auto pt-4 pb-12" container>
      <form onSubmit={submitHandler} className="loginForm">
        <Typography>Login</Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don&apos;t have an account? &nbsp;
            <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <GoogleButton
              onClick={() => {
                router.push('/api/auth/login');
              }}
            />
          </ListItem>
        </List>
      </form>
    </Grid>
  );
};

export default Login;
