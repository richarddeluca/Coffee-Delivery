import { useContext } from 'react'
import {
  CoffeesContext,
  // permanentCoffeeList,
} from '../../../contexts/coffeesContext'
import { FeatureContainer, CoffeeCards } from './styles'
// const coffes = [1, 2, 3, 4, 5, 6, 7]

import { CoffeeCard } from './CoffeCard'

export function Feature() {
  const { coffeesState } = useContext(CoffeesContext)
  console.log(coffeesState + ' no feature')
  return (
    <FeatureContainer>
      <h2>Nossos cafés</h2>
      <CoffeeCards>
        {coffeesState.map((coffee) => {
          return (
            <CoffeeCard
              id={coffee.id}
              description={coffee.description}
              image={coffee.image}
              title={coffee.title}
              price={coffee.price}
              tagList={coffee.tagList}
              value={coffee.value}
              key={coffee.id}
            />
          )
        })}
      </CoffeeCards>
    </FeatureContainer>
  )
}
