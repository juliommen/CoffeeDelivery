import { SuccessContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgSuccess from '../../assets/illustration.png'

export function Success() {
  const { form } = useContext(CartContext)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que o café chegará até você</h2>
      <div>
        <main>
          <div>
            <header className="purple">
              <MapPin size={16} weight="fill" />
            </header>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {form.street}, {form.number}
                </strong>
              </p>
              <p>
                {form.district} - {form.city}, {form.state}
              </p>
            </div>
          </div>
          <div>
            <header className="yellow">
              <Timer size={16} weight="fill" />
            </header>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div>
            <header className="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </header>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{form.paymentMethod}</strong>
              </p>
            </div>
          </div>
        </main>
        <img src={imgSuccess} alt="" />
      </div>
    </SuccessContainer>
  )
}
