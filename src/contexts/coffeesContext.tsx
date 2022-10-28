import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeProps, coffeesReducer } from '../reducers/coffeeList/reducer.ts'

import coffeeImage01 from '../assets/expresso.png'
import coffeeImage02 from '../assets/americano.png'
import coffeeImage03 from '../assets/expresso-cremoso.png'
import coffeeImage04 from '../assets/gelado.png'
import coffeeImage05 from '../assets/cafe-com-leite.png'
import coffeeImage06 from '../assets/latte.png'
import coffeeImage07 from '../assets/capuccino.png'
import coffeeImage08 from '../assets/macchiato.png'
import coffeeImage09 from '../assets/mochaccino.png'
import coffeeImage10 from '../assets/chocolate-quente.png'
import coffeeImage11 from '../assets/cubano.png'
import coffeeImage12 from '../assets/havaiano.png'
import coffeeImage13 from '../assets/irlandes.png'
import {
  changeCoffeeValueAction,
  ChangeCoffeeValueProps,
  resetValuesAction,
} from '../reducers/coffeeList/actions'

export const permanentCoffeeList = [
  {
    id: '1',
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: coffeeImage01,
    tagList: ['Tradicional'],
    value: 0,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.7,
    image: coffeeImage02,
    tagList: ['Tradicional'],
    value: 0,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 11.9,
    image: coffeeImage03,
    tagList: ['Tradicional'],
    value: 0,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 10.9,
    image: coffeeImage04,
    tagList: ['Tradicional', 'Gelado'],
    value: 0,
  },
  {
    id: '5',
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 13.9,
    image: coffeeImage05,
    tagList: ['Tradicional', 'Com leite'],
    value: 0,
  },
  {
    id: '6',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 13.9,
    image: coffeeImage06,
    tagList: ['Tradicional', 'Com leite'],
    value: 0,
  },
  {
    id: '7',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 14.5,
    image: coffeeImage07,
    tagList: ['Tradicional', 'Com leite'],
    value: 0,
  },
  {
    id: '8',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 13.5,
    image: coffeeImage08,
    tagList: ['Tradicional', 'Com leite'],
    value: 0,
  },
  {
    id: '9',
    title: 'mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 13.5,
    image: coffeeImage09,
    tagList: ['Tradicional', 'Com leite'],
    value: 0,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 15.3,
    image: coffeeImage10,
    tagList: ['Especial', 'Com leite'],
    value: 0,
  },
  {
    id: '11',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 12.3,
    image: coffeeImage11,
    tagList: ['Especial', 'Alcoólico', 'Gelado'],
    value: 0,
  },
  {
    id: '12',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 13.3,
    image: coffeeImage12,
    tagList: ['Especial'],
    value: 0,
  },
  {
    id: '13 ',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e Chantilly',
    price: 13.3,
    image: coffeeImage13,
    tagList: ['Especial'],
    value: 0,
  },
]

interface CoffeesContextType {
  coffeesState: CoffeeProps[]
  selectedCoffees: CoffeeProps[]
  coffeesSum: number
  changeCoffeeValue: (arg0: ChangeCoffeeValueProps) => void
  resetValues: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    permanentCoffeeList,
  )

  const selectedCoffees = coffeesState.filter((coffee) => {
    return coffee.value > 0
  })

  const coffeesSum = selectedCoffees.reduce((acc, curr) => {
    return acc + curr.price * curr.value
  }, 0)

  function changeCoffeeValue({ id, value }: ChangeCoffeeValueProps) {
    dispatch(changeCoffeeValueAction({ id, value }))
  }

  function resetValues() {
    dispatch(resetValuesAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesState,
        selectedCoffees,
        coffeesSum,
        changeCoffeeValue,
        resetValues,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
