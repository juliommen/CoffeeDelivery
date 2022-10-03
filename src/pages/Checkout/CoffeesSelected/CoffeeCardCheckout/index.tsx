import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, CoffeeSelected } from '../../../../contexts/CartContext'
import { CoffeeCardCheckoutContainer } from './styles'

export function CoffeeCardCheckout({ qt, total, name, img }: CoffeeSelected) {
  const {
    decreaseCoffeeFromCart,
    increaseCoffeeFromCart,
    removeCoffeeFromCart,
  } = useContext(CartContext)

  function handleDecreaseQuantity() {
    decreaseCoffeeFromCart(name)
  }
  function handleIncreaseQuantity() {
    increaseCoffeeFromCart(name)
  }
  function handleRemoveItem() {
    removeCoffeeFromCart(name)
  }

  return (
    <CoffeeCardCheckoutContainer>
      <img src={img} alt="" />
      <main>
        <p>{name}</p>
        <div>
          <div>
            <Minus size={14} onClick={handleDecreaseQuantity} />
            <p>{qt}</p>
            <Plus size={14} onClick={handleIncreaseQuantity} />
          </div>
          <button onClick={handleRemoveItem}>
            <Trash size={16} />
            <p>REMOVER</p>
          </button>
        </div>
      </main>
      <h2>R$ {total.toFixed(2)}</h2>
    </CoffeeCardCheckoutContainer>
  )
}
