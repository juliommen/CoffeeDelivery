import produce from 'immer'
import { CoffeeSelected, formType } from '../contexts/CartContext'
import { ActionTypes } from './cartActions'

interface cartStateType {
  coffeesSelected: CoffeeSelected[]
  form: formType
}

export function cartReducer(state: cartStateType, action: any) {
  const coffees = state.coffeesSelected
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART: {
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

    case ActionTypes.REMOVE_COFFEE_CART: {
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
    case ActionTypes.INCREASE_COFFEE_CART: {
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
    case ActionTypes.DECREASE_COFFEE_CART: {
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

    case ActionTypes.CHANGE_FORM: {
      return produce(state, (draft: any) => {
        const field = action.payload.field as string
        const value = action.payload.value as string
        draft.form[field] = value
      })
    }

    case ActionTypes.CLEAR_COFFEE_SELECTION: {
      return produce(state, (draft) => {
        draft.coffeesSelected = []
      })
    }
    default:
      return state
  }
}
