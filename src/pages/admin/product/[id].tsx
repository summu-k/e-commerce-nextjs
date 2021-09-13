/* eslint-disable camelcase */
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
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { updateProduct, uploadProductImage } from '../../api/product/[id]';
import { fetchSingleProduct } from '../../../pages/api/product/[id]';
import { WishlistContext } from '../../../contexts/WishlistContext';
import { AuthContextType } from '../../../utils/interfaces';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
}

function ProductEdit({ params }) {
  const productId = params.id;
  const { state } = useContext(WishlistContext) as AuthContextType;
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const product = await fetchSingleProduct(productId);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('product_name', product.product_name);
        setValue('brand', product.brand);
        setValue('sale_price', product.sale_price);
        setValue('discount', product.discount);
        setValue('rating', product.rating);
        setValue('images', product.images[0]);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    fetchData();
  }, []);

  const uploadHandler = async (e) => {
    const file = e.target.files[0];

    const bodyFormData = new FormData();
    bodyFormData.append('photo', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await uploadProductImage(bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setValue('images', data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async ({ product_name, brand, sale_price, images, discount, rating }) => {
    try {
      await updateProduct(productId, {
        product_name,
        brand,
        sale_price,
        images,
        discount,
        rating,
      });
      router.push('/admin/dashboard');
    } catch (err) {
      console.log('error ', err);
    }
  };
  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={12}>
        <Card className="section">
          <List>
            <NextLink href="/admin/products" passHref>
              <ListItem selected button component="a">
                <ListItemText primary="Products" />
              </ListItem>
            </NextLink>
          </List>
        </Card>
      </Grid>
      <Grid item md={9} xs={12}>
        <Card className="section">
          <List>
            <ListItem>
              <Typography component="h3" variant="h3">
                Edit Product {productId}
              </Typography>
            </ListItem>
            <ListItem>
              {loading && <CircularProgress />}
              {error && <Typography className="error">{error}</Typography>}
            </ListItem>
            <ListItem>
              <form onSubmit={handleSubmit(submitHandler)} className="product-form">
                <List>
                  <ListItem>
                    <Controller
                      name="product_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="product_name"
                          label="Product Name"
                          error={Boolean(errors.product_name)}
                          helperText={errors.product_name ? 'Name is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="brand"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="brand"
                          label="Brand"
                          error={Boolean(errors.brand)}
                          helperText={errors.brand ? 'Brand is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="sale_price"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="sale_price"
                          label="Price"
                          error={Boolean(errors.sale_price)}
                          helperText={errors.sale_price ? 'Price is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="images"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="images"
                          label="Image"
                          error={Boolean(errors.images)}
                          helperText={errors.images ? 'Images is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" component="label">
                      Upload File
                      <input type="file" onChange={uploadHandler} hidden />
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="discount"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="discount"
                          label="Discount"
                          error={Boolean(errors.discount)}
                          helperText={errors.discount ? 'Discount is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="rating"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="rating"
                          label="Rating"
                          error={Boolean(errors.rating)}
                          helperText={errors.rating ? 'Rating is required' : ''}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" type="submit" fullWidth color="primary">
                      Update
                    </Button>
                  </ListItem>
                </List>
              </form>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(ProductEdit), { ssr: false });
