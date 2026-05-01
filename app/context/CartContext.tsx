// app/context/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (Id: number) => void;
    updateQuantity: (Id: number, quantity: number) => void;
    clearCart: number;
    cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart ] = useState<CartItem[]>([]);
    
    const addToCart = (product: CartItem) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find(item => item.id === product.id);

            if (existingItem) {
                return currentCart.map(item => 
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1 }
                    : item
                );
            } else {
                return [...currentCart, {...product, quantity: 1}];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart(currentCart=> currentCart.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(currentCart =>
            currentCart.map(item =>
                item.id === id ? {...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
