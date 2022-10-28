import produce from 'immer'
import { ActionProps, ActionTypes } from './actions'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  tagList: string[]
  value: number
}

export function coffeesReducer(state: CoffeeProps[], action: ActionProps) {
  switch (action.type) {
    case ActionTypes.CHANGE_COFFEE_VALUE: {
      return produce(state, (draft) => {
        const currentCoffeeIndex = state.findIndex((coffee) => {
          return coffee.id === action.payload!.id
        })
        draft[currentCoffeeIndex].value = action.payload!.value
      })
    }
    case ActionTypes.RESET_VALUES:
      return state.map((coffee) => {
        coffee.value = 0
        return coffee
      })

    default:
      return state
  }
}
