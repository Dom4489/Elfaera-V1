import { useMemo } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ProductCard from "./ProductCard";


export default function Products() {

  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate('/product');
  }
  const currency = useSelector((state) => state.currency.currency);
  const exchangeRates = useSelector((state) => state.currency.exchangeRates);

  const baseProducts = [
    {
      id: 1,
      name: 'ELFAERA Eyelids',
      images:[
        '/src/assets/Black Eyelid Photos2510.jpg',
        '/src/assets/Black Eyelid Photos2500.jpg',
        '/src/assets/Eyelid Photos2494.jpg',
        '/src/assets/blue eyelids.png',
      ],
      imageAlt: "ELFAERA Eyelids.",
      price: 123,
      color: 'Black',
    },
    ]

    const products = useMemo(() => {
      return baseProducts.map(product => {
        let price = product.price;
        if (currency === 'USD') {
          const rate = exchangeRates[currency];
          price = product.price * rate;
        }
        
        return {
          ...product,
          price: `$${price.toFixed(2)}`
        };
      });
    }, [currency, exchangeRates]);
  return (
    <div className="bg-white mt-[-2rem]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">ELFAERA Eyelids | Batch 01 — ZN6 / ZC6</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
