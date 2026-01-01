import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart/cartSlice';
import ImageCarousel from '../Components/ProductInfoCarousel';

export default function ProductInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currency = useSelector((state) => state.currency.currency);
  const exchangeRates = useSelector((state) => state.currency.exchangeRates);
  const cartItems = useSelector((state) => state.cart.items);
  
  // Check if cart has items
  const hasItemsInCart = cartItems.length > 0;
  
  const baseProducts = [{
    id: 1,
    name: 'ELFAERA Eyelids',
    price: 123, // Base price in CAD (number)
    color: 'Black',
    // breadcrumbs: [
    //   { id: 1, name: 'Products', href: '/' },
    // ],
    images: [
      {
        src: '/images/Black Eyelid Photos2535.jpg',
        alt: 'Black Elfaera Eyelids.',
      },
      {
        src: '/images/Black Eyelid Photos2513.jpg',
        alt: 'Black Elfaera Eyelids.',
      },
      {
        src: '/images/Black Eyelid Photos2500.jpg',
        alt: 'Black Elfaera Eyelids.',
      },
      {
        src: '/images/Black Eyelid Photos2510.jpg',
        alt: 'Black Elfaera Eyelids.',
      },
    ],
    description:
      'Carbon reinforced PETG eyelids designed for the 2013–2021 86/BRZ/FR-S platform. Lightweight, durable, scanned and fitted for perfect fitment.',
    included: [
      'Left + right eyelids',
      'Mounting tape',
      'Install instructions',
    ],
    shippingDetails:
      'All orders ship directly from Vancouver, BC, with Canada and US delivery available. Every purchase includes a simple, transparent shipping rate—either flat-rate or auto-calculated—and is processed within 3 to 5 days to ensure a smooth and reliable experience.',
  }]

  const products = useMemo(() => {
    return baseProducts.map(product => {
      let price = product.price;
      if (currency === 'USD') {
        const rate = exchangeRates[currency];
        price = product.price * rate;
      }
      
      return {
        ...product,
        priceValue: price, // Keep as number
        priceDisplay: `$${price.toFixed(2)} ${currency}` // Formatted string for display
      };
    });
  }, [currency, exchangeRates]);

  const product = products[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    
    if (hasItemsInCart) return; // Prevent adding if cart has items
    
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      basePrice: baseProducts[0].price, // Store the base CAD price ()
      quantity: 1,
      color: product.color,
      image: product.images[0].src,
    }));
    navigate("/store");
  }

  const handleBuyNow = (e) => {
    e.preventDefault();
    window.location.href = 'https://buy.stripe.com/8x28wO7iw8jB3Mj6a7dZ600';
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg fill="currentColor" width={16} height={20} viewBox="0 0 16 20" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <p className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </p>
            </li>
          </ol>
        </nav>

        {/* Image gallery - SINGLE CAROUSEL */}
        <div className="mx-auto mt-6 max-w-2xl max-h-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="lg:col-span-2 max-h-2xl">
            <ImageCarousel images={product.images} />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl tracking-tight text-gray-900">{product.priceDisplay}</p>
            <form className="mt-10">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={hasItemsInCart}
                className={`mt-10 flex w-full items-center justify-center rounded-md border border-blue px-8 py-3 text-base font-medium text-blue focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden ${
                  hasItemsInCart 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'hover:bg-blue-500 hover:text-white'
                }`}
              >
                Add to cart
              </button>
              
              {hasItemsInCart && (
                <p className="mt-2 text-sm text-gray-600 text-center">
                  We are currently only allowing one unit per purchase
                </p>
              )}

              <button
                type="button"
                onClick={handleBuyNow}
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden
                hover:text-blue"
              >
                {hasItemsInCart ? 'Go to checkout' : 'Buy now'}
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">What's Included</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.included.map((item) => (
                    <li key={item} className="text-gray-400">
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Shipping Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.shippingDetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}