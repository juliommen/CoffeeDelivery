import { CoffeessSelectedContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CoffeeCardCheckout } from './CoffeeCardCheckout/index'
import { deliveryCharge } from './../../../constants'

export function CoffeesSelected() {
  const { coffeesSelected, form } = useContext(CartContext)

  let totalItens = 0
  let entrega = 0
  let totalGeral = 0

  if (coffeesSelected !== undefined) {
    totalItens = coffeesSelected.reduce(
      (total, coffee) => total + coffee.total,
      0,
    )
    entrega = deliveryCharge
    totalGeral = totalItens + entrega
  }

  const isSubmitValid = coffeesSelected.length > 0 && form.paymentMethod !== ''

  return (
    <CoffeessSelectedContainer>
      <h1>Cafés selecionados</h1>
      <main>
        {coffeesSelected !== undefined &&
          coffeesSelected.map((coffee) => (
            <header key={coffee.name}>
              <CoffeeCardCheckout
                qt={coffee.qt}
                total={coffee.total}
                name={coffee.name}
                img={coffee.img}
              />
              <hr />
            </header>
          ))}
        <div>
          <h2>Total de itens</h2>
          <h3>R$ {totalItens.toFixed(2)}</h3>
        </div>
        <div>
          <h2>Entrega</h2>
          <h3>R$ {entrega.toFixed(2)}</h3>
        </div>
        <div>
          <h4>Total</h4>
          <h5>R$ {totalGeral.toFixed(2)}</h5>
        </div>
        <button type="submit" disabled={!isSubmitValid}>
          CONFIRMAR PEDIDO
        </button>
      </main>
    </CoffeessSelectedContainer>
  )
}
