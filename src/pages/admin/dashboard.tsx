import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useEffect, useContext, useReducer } from 'react';
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { WishlistContext } from '../../contexts/WishlistContext';
import { AuthContextType, ProductProps } from '../../utils/interfaces';
import { getAllFilterProductWithToken } from '../../pages/api/product';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '', info: action.info };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
}

function AdminDashboard() {
  const { state } = useContext(WishlistContext) as AuthContextType;
  const router = useRouter();
  const { userInfo } = state;

  const [{ products, successDelete }, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const page = 1;
        const { results, info } = await getAllFilterProductWithToken(`products?page=${page}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });

        console.log('results: ');
        console.log(results);

        console.log('info: ');
        console.log(info);

        dispatch({ type: 'FETCH_SUCCESS', payload: results, info });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, []);

  //   const createHandler = async () => {
  //     if (!window.confirm('Are you sure?')) {
  //       return;
  //     }
  //     try {
  //       dispatch({ type: 'CREATE_REQUEST' });
  //       const { data } = await axios.post(
  //         `/api/admin/products`,
  //         {},
  //         {
  //           headers: { authorization: `Bearer ${userInfo.token}` },
  //         }
  //       );
  //       dispatch({ type: 'CREATE_SUCCESS' });
  //       router.push(`/admin/product/${data.product.id}`);
  //     } catch (err) {
  //       dispatch({ type: 'CREATE_FAIL' });
  //     }
  //   };
  //   const deleteHandler = async (productId) => {
  //     if (!window.confirm('Are you sure?')) {
  //       return;
  //     }
  //     try {
  //       dispatch({ type: 'DELETE_REQUEST' });
  //       await axios.delete(`/api/admin/products/${productId}`, {
  //         headers: { authorization: `Bearer ${userInfo.token}` },
  //       });
  //       dispatch({ type: 'DELETE_SUCCESS' });
  //     } catch (err) {
  //       dispatch({ type: 'DELETE_FAIL' });
  //       console.log(err);
  //     }
  //   };

  return (
    <Grid className="mt-1 productListingWrapper mx-auto pt-4 pb-12" container spacing={1}>
      <Grid item md={3} xs={12}>
        <Card className="section">
          <List>
            {/* <NextLink href="/admin/products" passHref> */}
            <ListItem selected button component="a">
              <ListItemText primary="Products" />
            </ListItem>
            {/* </NextLink> */}
          </List>
        </Card>
      </Grid>
      <Grid item md={9} xs={12}>
        <Card className="section">
          <List>
            <ListItem>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography component="h3" variant="h3">
                    Products
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button onClick={null} color="primary" variant="contained">
                    Create
                  </Button>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>NAME</TableCell>
                      <TableCell>BRAND</TableCell>
                      <TableCell>SALES PRICE</TableCell>
                      <TableCell>DESCRIPTION</TableCell>
                      <TableCell>DISCOUNT</TableCell>
                      <TableCell>RATING</TableCell>
                      <TableCell>ACTIONS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product: ProductProps) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.product_name}</TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>${product.sale_price}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.discount}</TableCell>
                        <TableCell>{product.rating}</TableCell>
                        <TableCell>
                          <NextLink href={`/admin/product/${product.id}`} passHref>
                            <Button size="small" variant="contained">
                              Edit
                            </Button>
                          </NextLink>{' '}
                          <Button onClick={null} size="small" variant="contained">
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });
