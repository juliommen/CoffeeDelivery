import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  name: string
  price: number
  tags: string[]
  img: string
  desc: string
}

export function CoffeeCard({ name, price, tags, img, desc }: CoffeeCardProps) {
  const [qt, setQt] = useState(1)
  const { addCoffeeToCart } = useContext(CartContext)

  function handleDecreaseQt() {
    setQt((qt) => {
      if (qt > 1) {
        qt--
      }
      return qt
    })
  }

  function handleIncreaseQt() {
    setQt((qt) => {
      if (qt < 100) {
        qt++
      }
      return qt
    })
  }

  function handleAddCoffee() {
    addCoffeeToCart({ qt, total: price * qt, name, img })
    setQt(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={img} alt="" />
      <div>
        {tags.map((tag) => (
          <p key={name + tag}>{tag}</p>
        ))}
      </div>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <footer>
        <p>
          R$<span>{price}</span>
        </p>
        <div>
          <div>
            <Minus size={14} onClick={handleDecreaseQt} />
            <p>{qt}</p>
            <Plus size={14} onClick={handleIncreaseQt} />
          </div>
          <button onClick={handleAddCoffee}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
