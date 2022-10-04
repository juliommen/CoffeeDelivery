import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  changeFormAction,
  clearCoffeeSelectionAction,
  increaseCoffeeFromCartAction,
  removeCoffeeFromCartAction,
  decreaseCoffeeFromCartAction,
} from '../reducers/cartActions'
import { cartReducer } from '../reducers/cartReducer'

export interface CoffeeSelected {
  qt: number
  total: number
  name: string
  img: string
}

export interface formType {
  zip: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
  paymentMethod: string
}

interface CartContextType {
  coffeesSelected: CoffeeSelected[]
  form: formType
  addCoffeeToCart: (coffeeSelected: CoffeeSelected) => void
  removeCoffeeFromCart: (name: string) => void
  increaseCoffeeFromCart: (name: string) => void
  decreaseCoffeeFromCart: (name: string) => void
  changeForm: (field: string, value: string) => void
  clearCoffeeSelection: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const emptyState = {
    coffeesSelected: [],
    form: {
      zip: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: '',
      complement: '',
    },
  }
  const [cartState, dispatch] = useReducer(cartReducer, emptyState, () => {
    const storageStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )
    if (storageStateAsJSON !== null) {
      return JSON.parse(storageStateAsJSON)
    }
    return emptyState
  })

  const { coffeesSelected, form } = cartState

  function addCoffeeToCart(coffeeSelected: CoffeeSelected) {
    dispatch(addCoffeeToCartAction(coffeeSelected))
  }
  function removeCoffeeFromCart(name: string) {
    dispatch(removeCoffeeFromCartAction(name))
  }
  function increaseCoffeeFromCart(name: string) {
    dispatch(increaseCoffeeFromCartAction(name))
  }
  function decreaseCoffeeFromCart(name: string) {
    dispatch(decreaseCoffeeFromCartAction(name))
  }

  function changeForm(field: string, value: string) {
    dispatch(changeFormAction(field, value))
  }

  function clearCoffeeSelection() {
    dispatch(clearCoffeeSelectionAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState, null, 2)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        coffeesSelected,
        form,
        addCoffeeToCart,
        removeCoffeeFromCart,
        increaseCoffeeFromCart,
        decreaseCoffeeFromCart,
        changeForm,
        clearCoffeeSelection,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
