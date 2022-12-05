import { CircularProgress } from '@chakra-ui/react';
import { HeartIcon } from '@icons';
import { EyeOpenIcon } from '@icons';
import { ProductDetailsUrl } from '@urls/product';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

ProductCard.propTypes = {
  product: PropTypes.object,
  onAddCart: PropTypes.func.isRequired
};

function ProductCard({ product, onAddCart }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setLoading(true);
    if (onAddCart) await onAddCart(product);
    setLoading(false);
  };
  const handleReadMore = () => {
    router.push(ProductDetailsUrl(product._id));
  };
  return (
    <div className="product">
      <div
        className="product__thumbnail"
        onClick={handleReadMore}
      >
        <img
          className="product__thumbnail-image"
          src={
            product.img ||
            'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg'
          }
          alt=""
        />
        <div className="product__thumbnail-overlay">
          {/* TODO: no-time to develop */}
          <div className="overlay__icons ">
            <a className="wishlist hidden">
              <HeartIcon />
            </a>
            <a className="quickview hidden">
              <EyeOpenIcon
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="overlay__add-cart">
            {product.quantity > 0 ? (
              !loading ? (
                <a
                  className="konsept-link text--italic"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </a>
              ) : (
                <CircularProgress
                  color="black"
                  size={24}
                />
              )
            ) : (
              <a
                className="konsept-link text--italic"
                onClick={handleReadMore}
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="product__content">
        <div className="product__info">
          <h5
            className="product__info-title cursor-pointer"
            onClick={handleReadMore}
          >
            {product.title}
          </h5>
          <div className="product__info-category">
            {product.categories.map((cate, idx) => (
              <span key={cate}>
                {idx !== 0 ? ', ' : ''}
                <a
                  onClick={() => {
                    history.push({
                      pathname: path.products,
                      search: `?category=${cate}`
                    });
                  }}
                  style={{ textTransform: 'capitalize' }}
                >
                  {cate}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="product__info-price">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
