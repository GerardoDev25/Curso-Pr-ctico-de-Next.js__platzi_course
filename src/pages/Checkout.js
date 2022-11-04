import React from 'react';
import OrderItem from '@components/OrderItem';
import style from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <div className={style.Checkout}>
      <div className={style['Checkout-container']}>
        <h1 className={style.title}>My order</h1>
        <div className={style['Checkout-content']}>
          <div className={style.order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Checkout;
