import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
const products = [
 {
   id: 1,
   name: 'ELFAERA Eyelids',
   href: '#',
   imageSrc: '/src/assets/Black Eyelid Photos2510.jpg',
   imageAlt: "ELFAERA Eyelids.",
   price: '$90',
   color: 'Black',
 },
 {
  id: 2,
  name: 'ELFAERA Eyelids',
  href: '#',
  imageSrc: '/src/assets/blue eyelids.png',
  imageAlt: "ELFAERA Eyelids.",
  price: '$90',
  color: 'Blue',
 },
]

export default function Products() {

 const navigate = useNavigate();
 const handleProductClick = () => {
  navigate('/product');
 }
 return (
   <div className="bg-white">
     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lorem ipsum dolor sit amet.</h2>

       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         {products.map((product) => (
           <div 
           key={product.id} className="group relative"
           onClick={handleProductClick}
           >
             <img
               alt={product.imageAlt}
               src={product.imageSrc}
               className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
             />
             <div className="mt-4 flex justify-between">
               <div>
                 <h3 className="text-sm text-gray-700">
                   <a href={product.href}>
                     <span aria-hidden="true" className="absolute inset-0" />
                     {product.name}
                   </a>
                 </h3>
                 <p className="mt-1 text-sm text-gray-500">{product.color}</p>
               </div>
               <p className="text-sm font-medium text-gray-900">{product.price}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 )
}
