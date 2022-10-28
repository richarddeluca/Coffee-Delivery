export enum ActionTypes {
  //  eslint-disable-next-line no-unused-vars
  CHANGE_COFFEE_VALUE = 'CHANGE_COFFEE_VALUE',
  //  eslint-disable-next-line no-unused-vars
  RESET_VALUES = 'RESET_VALUES',
}

export interface ActionProps {
  type: string
  payload?: {
    id: string
    value: number
  }
}

export interface ChangeCoffeeValueProps {
  id: string
  value: number
}

export function changeCoffeeValueAction({
  id,
  value,
}: ChangeCoffeeValueProps): ActionProps {
  return {
    type: ActionTypes.CHANGE_COFFEE_VALUE,
    payload: {
      value,
      id,
    },
  }
}

export function resetValuesAction() {
  return {
    type: ActionTypes.RESET_VALUES,
  }
}
