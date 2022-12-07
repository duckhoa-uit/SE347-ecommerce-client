import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductListUrl } from '@urls/product';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

FilterByPrice.propTypes = {
  filters: PropTypes.object.isRequired
};

function FilterByPrice({ filters }) {
  const router = useRouter();
  const schema = yup.object().shape({
    priceRange: yup.array().length(2)
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      priceRange: [Number.parseInt(filters.minPrice) || 0, Number.parseInt(filters.maxPrice) || 200]
    },
    resolver: yupResolver(schema)
  });

  const handleFilterPriceClick = ({ priceRange }) => {
    const minPrice = priceRange[0];
    const maxPrice = priceRange[1];
    if (minPrice > 0 || maxPrice > 0) {
      let _filters = filters;
      if (minPrice > 0) {
        _filters = { ..._filters, minPrice };
      } else {
        delete _filters.minPrice;
      }
      if (maxPrice > 0) {
        _filters = { ..._filters, maxPrice };
      } else {
        delete _filters.maxPrice;
      }
      router.push(ProductListUrl(_filters));
    }
  };

  return (
    <div className="filter-by-price">
      <h4>Price range</h4>
      <form onSubmit={handleSubmit(handleFilterPriceClick)}>
        <Controller
          name="priceRange"
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <RangeSlider
                min={0}
                max={200}
                step={1}
                value={value}
                onChange={onChange}
                className="price__slider"
                colorScheme="navy"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <div className="price__viewer">
                <div className="price__range">
                  <span className="from"> ${value[0].toFixed(2)}</span>
                  <span className="to"> — ${value[1].toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="konsept-link price__filter"
                >
                  APPLY
                </button>
              </div>
            </>
          )}
        />
      </form>
    </div>
  );
}

export default FilterByPrice;
