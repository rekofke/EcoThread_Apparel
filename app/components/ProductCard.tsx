// app/components/ProductCard.tsx
'use client';

import { useCart } from '../context/CartContext';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        overflow-hidden
        bg-white
        rounded-3xl border border-gray-100
        shadow-sm transition-all
        group hover:shadow-xl duration-300
      "
    >
      <div
        className="
          overflow-hidden
          relative aspect-square
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            object-cover
            w-full h-full
            transition-transform
            group-hover:scale-105 duration-500
          "
        />
        <div
          className="
            px-3 py-1
            text-xs font-medium
            bg-white
            rounded-full
            absolute top-4 right-4 shadow
          "
        >
          {product.material}
        </div>
      </div>
      
      <div
        className="
          p-6
        "
      >
        <div
          className="
            mb-1
            text-xs tracking-widest text-emerald-600
            uppercase
          "
        >{product.category}</div>
        <h3
          className="
            mb-2
            font-semibold text-lg
            line-clamp-2
          "
        >{product.name}</h3>
        <p
          className="
            text-emerald-700 font-medium text-xl
          "
        >${product.price}</p>
        
        <button
          onClick={() => addToCart(product)}
          className="
            w-full
            mt-6 py-3.5
            text-white font-medium
            bg-emerald-600
            rounded-2xl
            transition-all
            hover:bg-emerald-700 active:scale-95
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}