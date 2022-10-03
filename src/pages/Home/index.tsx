import { HomeContainer } from './styles'
import { Banner } from './Banner'
import { Coffeeslist } from './CoffeesList/index'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Coffeeslist />
    </HomeContainer>
  )
}
