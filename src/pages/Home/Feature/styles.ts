import styled from 'styled-components'

export const FeatureContainer = styled.section`
  margin: 0 auto;
  width: 100%;

  h2 {
    margin: 0 auto;
    max-width: 1120px;
  }
`

export const CoffeeCards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
`

export const CoffeeCardContainer = styled.article`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`

export const CoffeeImg = styled.img``

export const TypeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PriceAndBuySection = styled.footer`
  width: 100%;
  padding: 0 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  .cifra {
    font-size: 0.875rem;
  }
  .preco {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }
`

export const CounterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px;
  width: 4.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme['purple-']};
    cursor: pointer;
  }
`
interface CartTypeButtonProps {
  upToDate: boolean
}
export const Cart = styled.button<CartTypeButtonProps>`
  border: 0;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 38px;
  height: 38px;

  background-color: ${(props) =>
    props.upToDate ? props.theme['purple-dark'] : props.theme['yellow-dark']};
  color: ${(props) => props.theme['white-']};

  &:hover {
    background-color: ${(props) =>
    props.upToDate ? props.theme['purple-'] : props.theme['yellow-']};
  }
`
