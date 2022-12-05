import { FormControl, Input } from '@chakra-ui/react';
import { ProductListUrl } from '@urls/product';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import React, { useRef } from 'react';

FilterBySearching.propTypes = {
  filters: PropTypes.object.isRequired
};

function FilterBySearching({ filters }) {
  const router = useRouter();
  const ref = useRef(null);

  const handleChange = (e) => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      const url = ProductListUrl({ ...filters, search: e.target.value.trim() });
      router.push(url);
    }, 1000);
  };

  return (
    <div className="filter-by-sorting">
      {/* TODO:add search with text */}
      <FormControl
        fullWidth
        variant="standard"
        sx={{ minWidth: 120, width: '100%', height: 50 }}
      >
        <Input
          sx={{ width: '100%' }}
          id="standard-basic"
          label="Search"
          variant="standard"
          color="black"
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
}

export default FilterBySearching;
