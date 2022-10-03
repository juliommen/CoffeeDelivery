import { COFFES_LIST } from '../../../constants'
import { CoffeeslistContainer } from './styles'
import { CoffeeCard } from './CoffeeCard'

export function Coffeeslist() {
  return (
    <CoffeeslistContainer>
      <h1>Nossos cafés</h1>
      <div>
        {COFFES_LIST.map((coffee) => (
          <CoffeeCard
            key={coffee.name}
            price={coffee.price}
            img={coffee.img}
            name={coffee.name}
            tags={coffee.tags}
            desc={coffee.desc}
          />
        ))}
      </div>
    </CoffeeslistContainer>
  )
}
