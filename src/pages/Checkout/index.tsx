import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CoffeesSelected } from './CoffeesSelected'
import { DeliveryForm } from './DeliveryForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const { clearCoffeeSelection } = useContext(CartContext)

  function handleOrder(e: any) {
    e.preventDefault()
    clearCoffeeSelection()
    navigate('/success')
  }

  return (
    <CheckoutContainer action="" onSubmit={handleOrder}>
      <DeliveryForm />
      <CoffeesSelected />
    </CheckoutContainer>
  )
}
