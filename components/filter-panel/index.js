// import PrimaryButton from '@/components/button/Button';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './category-filter';
import FilterByPrice from './price-filter';
import FilterBySearching from './searching-filter';
import FilterBySorting from './sorting-filter';

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
};

function FilterPanel({ categories, filters }) {
  const router = useRouter();

  return (
    <Box>
      <FilterBySearching filters={filters} />
      <FilterBySorting filters={filters} />
      <FilterByCategory
        categories={categories}
        filters={filters}
      />
      <FilterByPrice filters={filters} />

      <Box sx={{ mt: 2 }}>
        {/* <PrimaryButton
          fullWidth
          onClick={() => router.push('/products')}
        >
          Reset filters
        </PrimaryButton> */}
      </Box>
    </Box>
  );
}

export default FilterPanel;
