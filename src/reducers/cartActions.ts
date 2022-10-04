import { CoffeeSelected } from '../contexts/CartContext'

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
  INCREASE_COFFEE_CART = 'INCREASE_COFFEE_CART',
  DECREASE_COFFEE_CART = 'DECREASE_COFFEE_CART',
  CHANGE_FORM = 'CHANGE_FORM',
  CLEAR_COFFEE_SELECTION = 'CLEAR_COFFEE_SELECTION',
}

export function addCoffeeToCartAction(coffeeSelected: CoffeeSelected) {
  return {
    type: 'ADD_COFFEE_CART',
    payload: coffeeSelected,
  }
}

export function removeCoffeeFromCartAction(name: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: { name },
  }
}

export function increaseCoffeeFromCartAction(name: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_CART,
    payload: { name },
  }
}

export function decreaseCoffeeFromCartAction(name: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_CART,
    payload: { name },
  }
}

export function changeFormAction(field: string, value: string) {
  return {
    type: ActionTypes.CHANGE_FORM,
    payload: { field, value },
  }
}

export function clearCoffeeSelectionAction() {
  return {
    type: ActionTypes.CLEAR_COFFEE_SELECTION,
  }
}
