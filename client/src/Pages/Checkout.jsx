import React, { useState } from 'react';
import { Select, Space } from 'antd';
import { Trash2 } from 'lucide-react';

export default function Checkout() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Black',
      price: 32.00,
      quantity: 1,
      image: '🖤'
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Sienna',
      price: 32.00,
      quantity: 1,
      image: '🧡'
    }
  ]);

  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.00;
  const taxes = 5.52;
  const total = subtotal + shipping + taxes;

  return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div>
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Contact information</h2>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Shipping Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Shipping information</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Apartment, suite, etc.</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Country</label>
                  <Select
                   className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                   defaultValue="Canada"
                   style={{ height: 40 }}
                   options={[
                     { value: 'Canada', label: 'Canada' },
                     { value: 'United States', label: 'United States' },
                    ]}
                 />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">State / Province</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Postal code</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Delivery Method */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Delivery method</h2>
              <div className="grid grid-cols-2 gap-4">
                <label className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer ${deliveryMethod === 'standard' ? 'border-blue-600' : 'border-gray-300'}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={deliveryMethod === 'standard'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="absolute top-4 right-4"
                  />
                  <span className="font-semibold text-sm">Standard</span>
                  <span className="text-xs text-gray-600 mt-1">4-10 business days</span>
                  <span className="text-sm font-semibold mt-2">$5.00</span>
                </label>

                <label className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer ${deliveryMethod === 'express' ? 'border-blue-600' : 'border-gray-300'}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={deliveryMethod === 'express'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="absolute top-4 right-4"
                  />
                  <span className="font-semibold text-sm">Express</span>
                  <span className="text-xs text-gray-600 mt-1">2-5 business days</span>
                  <span className="text-sm font-semibold mt-2">$16.00</span>
                </label>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Payment</h2>
              
              <div className="flex gap-6 mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Credit card</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">PayPal</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="etransfer"
                    checked={paymentMethod === 'etransfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">eTransfer</span>
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Card number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Name on card</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Expiration date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">CVC</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Order summary</h2>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-600">{item.color}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
                      <Select
                        value={item.quantity}
                        style={{ width: 80 }}
                        onChange={(value) => updateQuantity(item.id, value)}
                        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({
                        value: num,
                        label: num
                         }))}
                       />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="border-t pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Confirm Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Confirm order
            </button>
          </div>
        </div>
      </div>
  );
}