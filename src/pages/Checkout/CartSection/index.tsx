import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeesContext } from '../../../contexts/coffeesContext'
import { CoffeeProps } from '../../../reducers/coffeeList/reducer.ts'
import {
  Container,
  CompraContainer,
  InputsContainer,
  CoffeeSelectedStyle,
  Line,
  ValoresDaCompra,
  ConfirmButton,
  RemoveButton,
  CounterStyle,
} from './styles'

export function CartSection() {
  const { resetValues, selectedCoffees, coffeesSum } =
    useContext(CoffeesContext)
  const fretePrice = 3.9
  return (
    <Container>
      <h2>Cafés selecionados</h2>
      <InputsContainer>
        <CompraContainer>
          {selectedCoffees ? (
            selectedCoffees.map((coffee) => {
              return (
                <>
                  <CoffeeSelected
                    id={coffee.id}
                    description={coffee.description}
                    image={coffee.image}
                    title={coffee.title}
                    price={coffee.price}
                    tagList={coffee.tagList}
                    value={coffee.value}
                    key={coffee.id}
                  />
                  <Line />
                </>
              )
            })
          ) : (
            <div>não há cafés selecionados</div>
          )}
          <ValoresDaCompra>
            <p>
              <span className="description">Total de itens</span>
              <span className="price">
                {coffeesSum.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </p>
            <p>
              <span>Entrega</span>
              <span className="price">
                {fretePrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </p>
            <p>
              <span className="total">Total</span>
              <span className="total">
                {(coffeesSum + fretePrice).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </p>
          </ValoresDaCompra>
          <NavLink to="/success">
            <ConfirmButton onClick={resetValues}>
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </NavLink>
        </CompraContainer>
      </InputsContainer>
    </Container>
  )
}

export function CoffeeSelected(props: CoffeeProps) {
  const { changeCoffeeValue } = useContext(CoffeesContext)
  function handleIncrementalClick() {
    const newValue = props.value + 1
    changeCoffeeValue({ id: props.id, value: newValue })
  }

  function handleDecrementalClick() {
    const newValue = props.value - 1
    changeCoffeeValue({ id: props.id, value: newValue })
  }

  function handleRemoveClick() {
    changeCoffeeValue({ id: props.id, value: 0 })
  }

  return (
    <CoffeeSelectedStyle>
      <img src={props.image} alt="" />
      <div className="content">
        <p className="name">{props.title}</p>
        <p className="price">
          {(props.price * props.value).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <CounterStyle className="counter">
          <Minus onClick={handleDecrementalClick} size={14} weight="bold" />
          <span className="quantidade">{props.value}</span>
          <Plus onClick={handleIncrementalClick} size={14} weight="bold" />
        </CounterStyle>{' '}
        <RemoveButton className="apagar" onClick={handleRemoveClick}>
          <Trash size={16} weight="bold" />
          <span>REMOVER</span>
        </RemoveButton>
      </div>
    </CoffeeSelectedStyle>
  )
}
