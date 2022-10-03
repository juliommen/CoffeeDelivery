import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CircleIcon, BannerContainer } from './styles'
import cover from '../../../assets/cover.png'

export function Banner() {
  return (
    <BannerContainer>
      <main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div>
          <CircleIcon iconColor="yellowDark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <p>Compra simples e segura</p>
          </CircleIcon>
          <CircleIcon iconColor="black">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </CircleIcon>
          <CircleIcon iconColor="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </CircleIcon>
          <CircleIcon iconColor="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <p>O café chega fresquinho até você</p>
          </CircleIcon>
        </div>
      </main>
      <img src={cover} alt="" />
    </BannerContainer>
  )
}
