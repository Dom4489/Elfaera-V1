import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BsCart, BsCartFill } from "react-icons/bs";
import CartDrawer from './CartDrawer';
import { changeCurrency } from '../redux/cart/currencySlice';

export default function Navbar() {
  const dispatch = useDispatch()
  const currency = useSelector((state) => state.currency.currency);
  const cartItems = useSelector((state) => state.cart.items);
  const [cartOpen, setCartOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCurrencyChange = useCallback(() => {
    if (currency === 'CAD') {
      dispatch(changeCurrency('USD'));
    } else {
      dispatch(changeCurrency('CAD'));
    }
  }, [currency, dispatch]);

  const openCartDrawer = () => {
    setCartOpen(true);
  } 

  const closeCartDrawer = () => {
    setCartOpen(false);
  }

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 90%, 100% {
            transform: translateY(0);
          }
          95% {
            transform: translateY(-8px);
          }
        }
        
        .cart-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="sticky top-0 w-full h-16 border-b border-gray-400 bg-white z-50 flex items-center justify-between px-6 text-xs">
        {/* Left side - Navigation links */}
        <div className="flex items-center space-x-2">
          <a 
            href="#products-section"
            onClick={(e) => handleScroll(e, 'products-section')}
            className="cursor-pointer hover:text-gray-600 font-medium"
          >
            Products
          </a>
          <a 
            href="#about-section"
            onClick={(e) => handleScroll(e, 'about-section')}
            className="cursor-pointer hover:text-gray-600 font-medium"
          >
            About
          </a>
        </div>

        {/* Center - Logo (absolute centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 ml-3">
          <img src="/images/JapaneseLogoElfaera.png" alt="Logo" className="h-10 w-auto" />
        </div>
        
        {/* Right side - Icons */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            {cartItems.length > 0 ? (
              <BsCartFill 
                onClick={openCartDrawer} 
                className="text-lg cursor-pointer cart-bounce" 
                key={cartItems.length} // Re-triggers animation when items change
              />
            ) : (
              <BsCart 
                onClick={openCartDrawer} 
                className="text-lg cursor-pointer" 
              />
            )}
          </div>
          <div 
            className="rounded overflow-hidden cursor-pointer"
            onClick={handleCurrencyChange}
          >
            <p className="text-xs font-bold rounded">{currency}</p>
          </div>
        </div>
      </div>
      <CartDrawer open={cartOpen} onClose={closeCartDrawer}/>
    </>
  );
}