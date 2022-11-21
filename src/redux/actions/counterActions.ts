export const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE'

export const setCounterValueAC = (value: number) => {
  return {
    type: SET_COUNTER_VALUE,
    payload: value
  }
}