import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import arrow from '@icons/flechita.svg';

import style from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={style.MyOrder}>
      <div className={style['title-container']}>
        <img src={arrow} alt='arrow' />
        <p className={style.title}>My order</p>
      </div>
      <div className={style['my-order-content']}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className={style.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href='/checkout' className={style['primary-button']}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
