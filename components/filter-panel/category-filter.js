import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Link from 'next/link';
import { Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';

FilterByCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
};

function FilterByCategory({ categories, filters }) {
  const router = useRouter();

  const renderCategories = () => {
    if (categories.length === 0) {
      return Array.from(new Array(10)).map((_, idx) => (
        <Skeleton
          width={150}
          height={25}
          key={idx}
        />
      ));
    }
    return categories.map((category) => {
      const isActive = category.name === router.query.category;
      return (
        <li
          className="category"
          key={category.name}
        >
          <Link
            style={{ textTransform: 'capitalize' }}
            className={isActive ? 'active' : ''}
            href={(() => {
              let _filters;
              const params = queryString.parse(router.query);
              if (params.category === category.name) {
                _filters = { ...filters };
                delete _filters.category;
              } else {
                _filters = { ...filters, category: category.name };
              }

              return `/products?${queryString.stringify(_filters)}`;
            })()}
          >{`${category.name} ${category.number ? `(${category.number})` : ''}`}</Link>
        </li>
      );
    });
  };

  return (
    <div className="filter-by-category">
      <h4>Categories</h4>
      <ul className="categories">{renderCategories()}</ul>
    </div>
  );
}

export default FilterByCategory;
