import { FormSection } from './AddressSection'
import { CartSection } from './CartSection'
import { MainCheckout } from './styles'

export function Checkout() {
  return (
    <MainCheckout>
      <FormSection />
      <CartSection />
    </MainCheckout>
  )
}
