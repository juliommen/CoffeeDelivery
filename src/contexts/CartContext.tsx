import produce from 'immer'
import { Key } from 'phosphor-react'
import { createContext, ReactNode, useEffect, useReducer } from 'react'

export interface CoffeeSelected {
  qt: number
  total: number
  name: string
  img: string
}

interface formType {
  zip: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
  paymentMethod: string
}

interface cartStateType {
  coffeesSelected: CoffeeSelected[]
  form: formType
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
  const [cartState, dispatch] = useReducer(
    (state: cartStateType, action: any) => {
      const coffees = state.coffeesSelected
      switch (action.type) {
        case 'ADD_COFFEE_CART': {
          if (coffees.length > 0) {
            const indexOfCoffee = coffees.findIndex((coffee) => {
              return coffee.name === action.payload.name
            })
            if (indexOfCoffee >= 0) {
              return produce(state, (draft) => {
                const coffee = draft.coffeesSelected[indexOfCoffee]
                coffee.qt += action.payload.qt
                coffee.total += action.payload.total
              })
            }
          }
          return produce(state, (draft) => {
            draft.coffeesSelected.push(action.payload)
          })
        }

        case 'REMOVE_COFFEE_CART': {
          if (coffees.length > 0) {
            const indexOfCoffee = coffees.findIndex((coffee) => {
              return coffee.name === action.payload.name
            })
            return produce(state, (draft) => {
              draft.coffeesSelected.splice(indexOfCoffee, 1)
            })
          }
          return state
        }
        case 'INCREASE_COFFEE_CART': {
          if (coffees.length > 0) {
            const indexOfCoffee = coffees.findIndex((coffee) => {
              return coffee.name === action.payload.name
            })
            if (indexOfCoffee >= 0 && coffees[indexOfCoffee].qt < 99) {
              return produce(state, (draft) => {
                const coffee = draft.coffeesSelected[indexOfCoffee]
                const valorUnitario = coffee.total / coffee.qt
                coffee.qt += 1
                coffee.total = valorUnitario * coffee.qt
              })
            }
          }
          return state
        }
        case 'DECREASE_COFFEE_CART': {
          if (coffees.length > 0) {
            const indexOfCoffee = coffees.findIndex((coffee) => {
              return coffee.name === action.payload.name
            })
            if (indexOfCoffee >= 0 && coffees[indexOfCoffee].qt > 1) {
              return produce(state, (draft) => {
                const coffee = draft.coffeesSelected[indexOfCoffee]
                const valorUnitario = coffee.total / coffee.qt
                coffee.qt -= 1
                coffee.total = valorUnitario * coffee.qt
              })
            }
          }
          return state
        }

        case 'CHANGE_FORM': {
          return produce(state, (draft: any) => {
            const field = action.payload.field as string
            const value = action.payload.value as string
            draft.form[field] = value
          })
        }

        case 'CLEAR_COFFEE_SELECTION': {
          return produce(state, (draft) => {
            draft.coffeesSelected = []
          })
        }
        default:
          return state
      }
    },
    emptyState,
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storageStateAsJSON !== null) {
        return JSON.parse(storageStateAsJSON)
      }
      return emptyState
    },
  )

  const { coffeesSelected, form } = cartState

  function addCoffeeToCart(coffeeSelected: CoffeeSelected) {
    dispatch({
      type: 'ADD_COFFEE_CART',
      payload: coffeeSelected,
    })
  }
  function removeCoffeeFromCart(name: string) {
    dispatch({
      type: 'REMOVE_COFFEE_CART',
      payload: { name },
    })
  }
  function increaseCoffeeFromCart(name: string) {
    dispatch({
      type: 'INCREASE_COFFEE_CART',
      payload: { name },
    })
  }
  function decreaseCoffeeFromCart(name: string) {
    dispatch({
      type: 'DECREASE_COFFEE_CART',
      payload: { name },
    })
  }

  function changeForm(field: string, value: string) {
    dispatch({
      type: 'CHANGE_FORM',
      payload: { field, value },
    })
  }

  function clearCoffeeSelection() {
    dispatch({
      type: 'CLEAR_COFFEE_SELECTION',
    })
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
