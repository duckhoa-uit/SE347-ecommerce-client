import { Grid, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './product-card';

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  onAddCart: PropTypes.func.isRequired
};

function ProductList({ data, onAddCart }) {
  return (
    <Grid spacing={2}>
      {data.map((product) => (
        <GridItem
          key={product._id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
        >
          <ProductCard
            product={product}
            onAddCart={onAddCart}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

export default ProductList;
export * from './skeleton';
