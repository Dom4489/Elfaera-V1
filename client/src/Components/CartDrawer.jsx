import React from 'react';
import { useSelector } from 'react-redux'
import { Button, Drawer } from 'antd';
import CartProductCard from './CartProductCard';

export default function CartDrawer({ open, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  
  const handleCheckoutClick = () => {
    window.location.href = 'https://buy.stripe.com/8x28wO7iw8jB3Mj6a7dZ600';
  }
  
  return (
    <>
      <Drawer
        title="Your Cart"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        size={320}
        footer={cartItems.length > 0 ? [
          <Button onClick={handleCheckoutClick} key="checkout" type="primary" block>
            Checkout
          </Button>
        ] : null}
      >
        <CartProductCard />
      </Drawer>
    </>
  );
}