import {
  Location,
  Cart,
  Logo,
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  CoffeeNumberBox,
  CartContainer,
} from './styles'
import logo from '../../assets/logo.png'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/coffeesContext'

export function Header() {
  const { selectedCoffees } = useContext(CoffeesContext)
  const coffeesNumber = selectedCoffees.reduce((acc, curr) => {
    return acc + (curr.value > 0 ? 1 : 0)
  }, 0)

  // scrollCart
  const [cartScrolled, setCartScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      console.log('rolou')
      if (window.scrollY > 60) {
        setCartScrolled(true)
      } else {
        setCartScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <Logo>
            <img src={logo} alt="" />
          </Logo>
        </NavLink>
        <HeaderActions>
          <Location className="transitionOnScroll">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <CartContainer className="transitionOnScroll" scroll={cartScrolled}>
            <NavLink to="/checkout">
              <Cart>
                <ShoppingCart size={22} weight="fill" />
                {coffeesNumber > 0 && (
                  <CoffeeNumberBox>{coffeesNumber}</CoffeeNumberBox>
                )}
              </Cart>
            </NavLink>
          </CartContainer>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
