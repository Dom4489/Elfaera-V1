import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'antd';
import { removeFromCart } from '../redux/cart/cartSlice';

export default function CartProductCard() {
  const dispatch = useDispatch();
  
  // Get cart items, currency, and exchange rates
  const cartItems = useSelector((state) => state.cart.items);
  const currency = useSelector((state) => state.currency.currency);
  const exchangeRates = useSelector((state) => state.currency.exchangeRates);
  
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate prices based on current currency
  const itemsWithCurrentPrices = useMemo(() => {
    return cartItems.map(item => {
      // Start with basePrice (CAD)
      let price = item.basePrice;
      
      // Convert to USD if needed
      if (currency === 'USD') {
        price = item.basePrice * exchangeRates.USD;
      }
      
      return {
        ...item,
        displayPrice: `$${price.toFixed(2)} ${currency}`
      };
    });
  }, [cartItems, currency, exchangeRates]);

  // If cart is empty, show message
  if (cartItems.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        Your cart is empty
      </div>
    );
  }

  return (
    <>
      {itemsWithCurrentPrices.map((item) => (
        <Card 
          key={item.id}
          size="small" 
          title={item.name} 
          extra={<a href="#" onClick={(e) => { e.preventDefault(); handleRemove(item.id); }}>Remove</a>} 
          style={{ width: 300, padding: '12px', marginBottom: '12px' }}
        >
          <div className="flex items-start space-x-3">
            <img 
              className='h-20 w-20 flex-shrink-0 object-cover rounded' 
              src={item.image || "/src/assets/Black Eyelid Photos2535.jpg"} 
              alt={item.name} 
            />
            <div className="flex-1 space-y-0.5">
              <p className="m-0 text-sm">Quantity: {item.quantity}</p>
              <p className="m-0 text-sm font-medium">{item.displayPrice}</p>
              <p className="m-0 text-sm text-gray-500">{item.color}</p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}