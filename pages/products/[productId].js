import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import productApi from '@api/product';
import { Button, CircularProgress, useToast } from '@chakra-ui/react';
import { addProductToCartLocalStorage } from '@utils';
import { addToCart } from '@reducer/product';
import { getCart } from '@reducer/cart';
import { ProductDetail, ProductDetailSkeleton } from '@components/product-details';
import { MainLayout } from '@layouts/main';

function ProductDetailPage(props) {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const cartId = useSelector((state) => state.cart._id);
  const { productId } = router.query;

  const [firstLoading, setFirstLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        try {
          const res = await productApi.getProduct(productId);
          console.log('🚀 ~ file: [productId].js:29 ~ res', res);
          setProductData(res.data);
        } catch (error) {
          console.log(error);
          router.push('/products');
        } finally {
          setFirstLoading(false);
        }
      })();
    }
  }, [router.isReady]);

  const handleAddToCart = async (_data) => {
    if (cartId) {
      setAddingToCart(true);
      try {
        const data = {
          cartId,
          payload: {
            productId,
            quantity: _data.quantity
          }
        };
        console.log(data);
        const res = await dispatch(addToCart(data)).then(unwrapResult);
        toast({
          title: res.message,
          status: 'success'
        });

        setAddingToCart(false);
        // get cart again
        await dispatch(getCart()).then(unwrapResult);
      } catch (error) {
        setAddingToCart(false);
        toast({
          title: error.message,
          status: 'error'
        });
      }
    } else {
      // Add to localStorage
      addProductToCartLocalStorage(productId, _data.quantity);
      toast({
        title: 'Add to cart successfully',
        status: 'success'
      });
    }
  };

  return (
    <section className="konsept-container">
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addingToCart}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}

      {firstLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <ProductDetail
          isAdding={addingToCart}
          product={productData}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
}

ProductDetailPage.Layout = MainLayout;
export default ProductDetailPage;
