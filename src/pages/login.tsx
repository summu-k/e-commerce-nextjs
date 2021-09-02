import { List, ListItem, Typography, TextField, Button, Link, Grid } from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <Grid className="mt-1 productListingWrapper mx-auto pt-4 pb-12" container>
      <form className="loginForm">
        <Typography>Login</Typography>
        <List>
          <ListItem>
            <TextField variant="outlined" fullWidth id="email" label="Email" inputProps={{ type: 'email' }} />
          </ListItem>
          <ListItem>
            <TextField variant="outlined" fullWidth id="password" label="Password" inputProps={{ type: 'password' }} />
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don&apos;t have an account? &nbsp;
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Grid>
  );
}
