import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../contexts/coffeesContext'
import { CoffeeProps } from '../../../reducers/coffeeList/reducer.ts'
import {
  CoffeeCardContainer,
  CoffeeImg,
  TypeList,
  TitleAndDescription,
  PriceAndBuySection,
  Cart,
  Price,
  CounterStyle,
} from './styles'

export function CoffeeCard(props: CoffeeProps) {
  const { changeCoffeeValue } = useContext(CoffeesContext)

  const [value, setValue] = useState(props.value)
  // eslint-disable-next-line prefer-const
  let isValueUpToDate = value === props.value
  const id = props.id
  function handleUpdateShoppingClick() {
    changeCoffeeValue({ id, value })
  }
  // function handleIncrementalButtons(type: 'plus' | 'minus') {
  //   setIsValueUpToDate(value )
  // }
  function handleDecremental() {
    if (value > 0) {
      setValue(value - 1)
    }
  }
  return (
    <CoffeeCardContainer>
      <CoffeeImg src={props.image} />
      <TypeList>
        {props.tagList.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </TypeList>
      <TitleAndDescription>
        <h3>{props.title}</h3>
        <p className="textCard">{props.description} </p>
      </TitleAndDescription>
      <PriceAndBuySection>
        <Price>
          <span className="cifra">R$</span>{' '}
          <span className="preco">
            {props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </Price>
        <div className="actions">
          <CounterStyle className="counter">
            <Minus onClick={handleDecremental} size={14} weight="bold" />
            <span className="quantidade">{value}</span>
            <Plus onClick={() => setValue(value + 1)} size={14} weight="bold" />
          </CounterStyle>
          <Cart upToDate={isValueUpToDate} onClick={handleUpdateShoppingClick}>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </div>
      </PriceAndBuySection>
    </CoffeeCardContainer>
  )
}
