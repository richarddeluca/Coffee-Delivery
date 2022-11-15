import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 0;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
`

export const CompraContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  padding: 2.5rem;
`
export const CoffeeSelectedStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  /* margin-bottom: 1.5rem; */

  img {
    width: 4rem;
    height: 4rem;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 2rem 1fr;
    grid-template-rows: 1fr 2rem;
    grid-column-gap: 8px;
    grid-row-gap: 8px;

    .name {
      grid-area: 1 / 1 / 2 / 4;
      width: 100%;
    }
    .price {
      grid-area: 1 / 4 / 2 / 5;
    }
    .counter {
      grid-area: 2 / 1 / 3 / 2;
    }
    .apagar {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
`
export const Line = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};

  /* margin-bottom: 1.5rem; */
`
export const ValoresDaCompra = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* margin-bottom: 1.5rem; */
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {
      font-size: 0.875rem;
    }
    .price {
      font-size: 1rem;
    }
    .total {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ConfirmButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-']};
  color: ${(props) => props.theme['white-']};

  font-size: 0.875rem;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
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
export const RemoveButton = styled.div`
  padding: 0.375rem 0.5rem;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme['purple-']};
  }

  span {
    font-size: 0.75rem;
  }

  &:hover {
    opacity: 0.8;
  }
`
