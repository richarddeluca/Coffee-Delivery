import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
`

export const HeaderContent = styled.nav`
  margin: 0 auto;
  width: 100%;
  /* max-width: 1120px; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  position: relative;
`

export const Location = styled.button`
  background-color: #ebe5f9;
  color: #4b2994;
  font-size: 0.875rem;

  svg {
    color: #8047f8;
  }
`
export const CartContainer = styled.div<{ scroll: boolean }>`
  position: ${(props) => (props.scroll ? 'fixed' : 'relative')};
  top: ${(props) => (props.scroll ? '1rem' : '0')};
  @media (min-width: 71rem) {
    right: ${(props) =>
    props.scroll ? 'calc((100vw - 71.25rem) / 2 - 2rem)' : '0'};
  }
`
export const Cart = styled.button`
  background-color: #f1e9c9;
  color: ${(props) => props.theme['yellow-dark']};
`
export const CoffeeNumberBox = styled.div`
  position: absolute;
  right: calc(1.25rem * -1 * (2 / 5));
  top: calc(1.25rem * -1 * (2 / 5));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white-']};
  font-size: 0.75rem;
`
