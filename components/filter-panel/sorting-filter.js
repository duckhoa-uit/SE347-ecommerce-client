import { FormControl, Menu, MenuItem, MenuList, Select } from '@chakra-ui/react';
import { ProductListUrl } from '@urls/product';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

FilterBySorting.propTypes = {
  filters: PropTypes.object.isRequired
};

function FilterBySorting({ filters }) {
  const router = useRouter();

  const handleChange = (e) => {
    const url = ProductListUrl({ ...filters, orderBy: e.target.value });
    router.push(url);
  };

  return (
    <div className="filter-by-sorting">
      <h4>Sorting</h4>
      <FormControl
        fullWidth
        variant="standard"
        sx={{ minWidth: 120, height: 50 }}
      >
        <Menu>
          <Select
            value={filters.orderBy ? filters.orderBy : 'updatedAt-desc'}
            onChange={handleChange}
            color="black"
          >
            <MenuList>
              <MenuItem value="updatedAt-desc">
                <em>Default Sorting</em>
              </MenuItem>

              <MenuItem value="createdAt-desc">Sort by latest</MenuItem>
              <MenuItem value="price-asc">Sort by price: low to high</MenuItem>
              <MenuItem value="price-desc">Sort by price: high to low</MenuItem>
            </MenuList>
          </Select>
        </Menu>
      </FormControl>
    </div>
  );
}

export default FilterBySorting;
