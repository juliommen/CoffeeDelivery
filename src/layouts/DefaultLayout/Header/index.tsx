import { HeaderContainer } from './styles'
import logo from '../../../assets/logo.svg'
import sun from '../../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
export function Header() {
  const { coffeesSelected, form } = useContext(CartContext)
  const coffeesSelectionTotal = coffeesSelected
    ? coffeesSelected.reduce((total, coffee) => total + coffee.qt, 0)
    : 0

  const destination =
    coffeesSelected && coffeesSelected.length > 0 ? '/checkout' : '/'
  return (
    <HeaderContainer>
      <header>
        <pre>
          <img src={sun} alt="" className="sun" />
          <img src={logo} alt="" />
        </pre>
        <div>
          <NavLink to="/" end title="Checkout">
            <MapPin size={22} weight="fill" />
            {form.city !== '' && form.state !== '' && (
              <p>
                {form.city}, {form.state}
              </p>
            )}
          </NavLink>
          <NavLink to={destination} end title="Checkout">
            <ShoppingCart size={22} weight="fill" />
            {coffeesSelectionTotal > 0 && <span>{coffeesSelectionTotal}</span>}
          </NavLink>
        </div>
      </header>
    </HeaderContainer>
  )
}
