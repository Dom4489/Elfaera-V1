import { useState } from 'react';
import { Button, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Navbar() {
 const [useCadCurrency, setUseCadCurrency] = useState(true);

 const changeCurrency = () => {
  setUseCadCurrency((state) => !state);
 }
 return (
  <div className="sticky top-0 w-full h-16 border-b border-gray-400 bg-white z-50 flex items-center justify-between px-6 text-xs">
    {/* Left side - Navigation links */}
    <div className="flex items-center space-x-2">
      <p className="cursor-pointer hover:text-gray-600">Products</p>
      <p className="cursor-pointer hover:text-gray-600">About</p>
    </div>

    {/* Center - Logo (absolute centered) */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <img src="/src/assets/IMG_2948.PNG" alt="Logo" className="h-6 w-auto" />
      {/* Replace "/logo.png" with your actual logo path */}
    </div>
    
    {/* Right side - Icons */}
    <div className="flex items-center space-x-2">
    <ShoppingCartOutlined className="text-xl" />
      
      {/* Currency flag - conditionally render based on your currency state */}
      {/* Example showing USD */}
      <div 
      className="rounded overflow-hidden cursor-pointer"
      onClick={changeCurrency}
      >
       {useCadCurrency && (
         <p className="text-xs font-bold rounded">CAD</p>
       )}
       {!useCadCurrency && (
         <p className="text-xs font-bold rounded">USD</p>
       )}
      </div>
    </div>
  </div>
);
}