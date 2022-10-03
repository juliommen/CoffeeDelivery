import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { DeliveryFormContainer } from './styles'

export function DeliveryForm() {
  const { form, changeForm } = useContext(CartContext)

  function handlePaymentMethodSelection(e: any) {
    const inputValue = e.currentTarget.id
    const inputChanged = 'paymentMethod'
    changeForm(inputChanged, inputValue)
  }

  useEffect(() => {
    const buttons = document.getElementsByTagName('button')
    for (const button of buttons) {
      if (button.id !== form.paymentMethod) button.classList.remove('active')
      else button.classList.add('active')
    }
  }, [form])

  function handleInput(e: any) {
    const inputValue = e.target.value
    const inputChanged = e.currentTarget.id
    changeForm(inputChanged, inputValue)
  }

  return (
    <DeliveryFormContainer>
      <h1>Complete seu pedido</h1>
      <main>
        <header>
          <MapPinLine size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <h3>Informe o endereço onde deseja receber seu pedido</h3>
          </div>
        </header>
        <div>
          <input
            type="text"
            id="zip"
            placeholder="CEP"
            value={form.zip}
            onInput={handleInput}
            required
          />
          <br />
          <input
            type="text"
            id="street"
            placeholder="Rua"
            value={form.street}
            onInput={handleInput}
            required
          />
          <br />
          <input
            type="text"
            id="number"
            placeholder="Número"
            value={form.number}
            onInput={handleInput}
            required
          />
          <input
            type="text"
            id="complement"
            value={form.complement}
            onInput={handleInput}
            placeholder="Complemento (opcional)"
          />
          <br />
          <input
            type="text"
            id="district"
            placeholder="Bairro"
            value={form.district}
            onInput={handleInput}
            required
          />
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            value={form.city}
            onInput={handleInput}
            required
          />
          <input
            type="text"
            id="state"
            placeholder="UF"
            value={form.state}
            onInput={handleInput}
            required
          />
        </div>
      </main>
      <footer>
        <header>
          <CurrencyDollar size={22} />
          <div>
            <h2>Pagamento </h2>
            <h3>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h3>
          </div>
        </header>
        <div>
          <button
            type="button"
            id="Cartão de Crédito"
            onClick={handlePaymentMethodSelection}
          >
            <CreditCard size={16} />
            <p>CARTÃO DE CRÉDITO</p>
          </button>
          <button
            type="button"
            id="Cartão de Débito"
            onClick={handlePaymentMethodSelection}
          >
            <Bank size={16} />
            <p>CARTÃO DE DÉBITO</p>
          </button>
          <button
            type="button"
            id="Dinheiro"
            onClick={handlePaymentMethodSelection}
          >
            <Money size={16} />
            <p>DINHEIRO</p>
          </button>
        </div>
      </footer>
    </DeliveryFormContainer>
  )
}
