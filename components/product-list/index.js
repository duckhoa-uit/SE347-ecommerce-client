import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { ProductCard } from './product-card';

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  onAddCart: PropTypes.func.isRequired
};

function ProductList({ data, onAddCart }) {
  return (
    <SimpleGrid
      spacing={2}
      columns={{ base: 1, md: 2, lg: 3 }}
    >
      {data.map((product) => (
        <GridItem key={product._id}>
          <ProductCard
            product={product}
            onAddCart={onAddCart}
          />
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

export default ProductList;
