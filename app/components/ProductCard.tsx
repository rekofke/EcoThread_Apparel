// app/components/ProductCard.tsx
'use client';

import Image from 'next/image';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    material: string;
};

export default function ProductCard({ product }: { product: Product}) {
    return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="relative aspect-square overflow-hidden">
        <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow">
            {product.material}
        </div>
        </div>

        <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-emerald-700 font-medium">${product.price}</p>

            <button
                className="mt-6 w-full bg-emerald-600 text-white py-3.5 rounded-2xl font-medium hover:bg-emerald-700 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    </div>
    );
}
