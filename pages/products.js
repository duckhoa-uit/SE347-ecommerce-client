import productApi from '@api/product';
import { Box, Button, Skeleton, Stack, Text, useToast } from '@chakra-ui/react';
import FilterPanel from '@components/filter-panel';
import ProductList, { SkeletonProductList } from '@components/product-list';
import useQuery from '@hooks/use-query';
import { MainLayout } from '@layouts/main';
import { getCart } from '@reducer/cart';
import { addToCart, getCategories } from '@reducer/product';
import { unwrapResult } from '@reduxjs/toolkit';
import { addProductToCartLocalStorage, renderPaginationText } from '@utils';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductListPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const cartId = useSelector((state) => state.cart?._id);

  const productListRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 9
  });

  const queryParams = useQuery();
  const filters = {
    ...queryParams,
    minPrice: Number.parseInt(queryParams.minPrice) || 0,
    maxPrice: Number.parseInt(queryParams.maxPrice) || 200
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(getCategories());
        const result = unwrapResult(res);
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const getProducts = async (_pagination) => {
    executeScroll();
    setLoading(true);
    try {
      const payload = {
        page: _pagination.currentPage,
        pageSize: _pagination.pageSize,
        ...filters
      };
      const res = await productApi.getProducts(payload);
      console.log(res);
      setProducts(res.data);
      setPagination(res.pagination);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts({ currentPage: 1, pageSize: 9 });
  }, [queryParams]);

  const handleChangePagination = (_, value) => {
    // executeScroll()
    getProducts({ currentPage: value, pageSize: pagination.pageSize });
  };
  const executeScroll = () => productListRef.current.scrollIntoView();

  const snackbarAction = (key) => (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={() => {
          router.push('/cart');
        }}
      >
        View Cart
      </Button>
    </>
  );

  const handleAddProductToCart = async (product) => {
    if (cartId) {
      try {
        const data = {
          cartId,
          payload: {
            productId: product._id,
            quantity: 1
          }
        };
        console.log(data);
        const res = await dispatch(addToCart(data)).then(unwrapResult);
        toast({
          title: res.message,
          status: 'success'
        });

        // reduce quantity
        const _data = [...products];
        _data.forEach((item) => {
          if (item._id === product._id && item.quantity > 0) {
            item.quantity--;
          }
        });
        setProducts(_data);

        // get cart again
        await dispatch(getCart()).then(unwrapResult);
      } catch (error) {
        toast({
          title: error.message,
          status: 'error'
        });
      }
    } else {
      // Add to localStorage
      addProductToCartLocalStorage(product._id, 1);
      toast({
        title: 'Add to cart successfully',
        status: 'success'
      });
      // reduce quantity
      const _data = [...products];
      _data.forEach((item) => {
        if (item._id === product._id && item.quantity > 0) {
          item.quantity--;
        }
      });
      setProducts(_data);
    }
  };

  return (
    <main className="products konsept-container">
      <div className="products__filters">
        <FilterPanel
          categories={categories}
          filters={filters}
        />
      </div>
      <div
        className="products__list"
        ref={productListRef}
      >
        <Box
          paddingLeft={10}
          mb={3}
          mt={2}
          className="text--italic color--gray"
        >
          {loading ? (
            <Skeleton
              width="180px"
              height="25px"
            />
          ) : (
            <h5>{renderPaginationText(pagination)}</h5>
          )}
        </Box>
        {loading ? (
          <SkeletonProductList />
        ) : (
          <ProductList
            data={products}
            onAddCart={handleAddProductToCart}
          />
        )}
        {products.length > 0 ? (
          <Stack
            direction="row"
            justifyContent="center"
          >
            {/* TODO: change to infinite scroll */}
            {/* <Pagination
              count={pagination.totalPages}
              page={pagination.currentPage}
              onChange={handleChangePagination}
            /> */}
          </Stack>
        ) : (
          <Box sx={{ mt: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!loading && (
              <Text variant="h5">No product found. Please try again with new filters.</Text>
            )}
          </Box>
        )}
      </div>
    </main>
  );
}

ProductListPage.Layout = MainLayout;
export default ProductListPage;
