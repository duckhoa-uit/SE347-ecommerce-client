import { Box, Button, Heading } from '@chakra-ui/react';
// import QuantityField from '@/components/form-controls/QuantityField';
import { QuantityField } from '@components/form-controls/quantity';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export function ProductDetail(props) {
  const { product, onAddToCart } = props;
  const router = useRouter();

  const schema = yup.object().shape({
    quantity: yup.number().min(1).nullable()
  });
  const formMethods = useForm({
    defaultValues: {
      quantity: 1
    },
    resolver: yupResolver(schema)
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset
  } = formMethods;

  const handleAddToCart = async (values) => {
    if (onAddToCart) {
      await onAddToCart(values);
      if (isSubmitSuccessful) reset({ quantity: 1 });
    }
  };

  return (
    <div className="product-detail">
      <div className="product-detail__thumbnail relative">
        <Image
          className="product-detail__image"
          src={product.img}
          fill
          alt=""
        />
      </div>
      <div className="product-detail__info">
        <h1 className="product-detail__title">{product.title}</h1>
        <p className="product-detail__price">${product.price.toFixed(2)}</p>
        <div className="product-detail__description">
          <p>{product.desc}</p>
        </div>

        {product.quantity > 0 ? (
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(handleAddToCart)}>
              <div className="add-to-cart">
                <QuantityField
                  name="quantity"
                  control={control}
                  max={product.quantity}
                />
                <Button
                  colorScheme="teal"
                  variant="solid"
                >
                  Buy now
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                >
                  Add to cart
                </Button>
              </div>
            </form>
          </FormProvider>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Heading as="h6">This product is out of stock.</Heading>
          </Box>
        )}

        <div className="product-detail__meta">
          <span className="product-detail__categories">
            <span className="product-detail__meta-label">Categories: </span>
            <span className="product-detail__meta-value">
              {product.categories.map((cate, idx) => (
                <span key={cate}>
                  {idx !== 0 ? ', ' : ''}
                  <a
                    onClick={() => {
                      router.push({
                        pathname: '/products',
                        search: `?category=${cate}`
                      });
                    }}
                  >
                    {cate}
                  </a>
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
