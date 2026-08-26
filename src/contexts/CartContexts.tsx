import { createContext, useContext, useState, type ReactNode } from 'react'

import type { Product } from '../types/product'

type CartStep = 'cart' | 'delivery' | 'payment' | 'finish'

interface CartContextData {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  cartQuantity: number

  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void

  cartStep: CartStep
  setCartStep: (step: CartStep) => void
}
const CartContext = createContext<CartContextData>({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== productId))
  }
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const cartQuantity = cart.length

  const [cartStep, setCartStep] = useState<CartStep>('cart')

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartQuantity,

        isCartOpen,
        openCart,
        closeCart,

        cartStep,
        setCartStep,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
