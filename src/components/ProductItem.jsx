import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

import style from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={style.ProductItem}>
      {product.images[0] && (
        <Image
          loader={() => product.images[0]}
          src={product.images[0]}
          alt={product.title}
          width='100%'
          height='100%'
          layout='responsive'
        />
      )}
      <div className={style['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={style['more-clickable-area']} onClick={() => handleClick(product)}>
          <Image src={addToCartImage} alt='' />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
