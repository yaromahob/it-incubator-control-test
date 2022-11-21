export const SET_START_VALUE = 'SET_START_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'
export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_NEW_OPTIONS = 'SET_NEW_OPTIONS'
export const SET_ERROR = 'SET_ERROR'
export const SET_DEFAULT_START_VALUE = 'SET_DEFAULT_START_VALUE'
export const SET_DEFAULT_MAX_VALUE = 'SET_MIN_VALUE'





export const setStartValueAC = (value: number) => {
  return {
    type: SET_START_VALUE,
    payload: value
  } as const
}

export const setMaxValueAC = (value: number) => {
  return {
    type: SET_MAX_VALUE,
    payload: value
  } as const
}

export const setMinValueAC = (value: number) => {
  return {
    type: SET_MIN_VALUE,
    payload: value
  } as const
}

export const setNewOptionsAC = (flag: boolean) => {
  return {
    type: SET_NEW_OPTIONS,
    payload: flag
  } as const
}

export const setErrorIncorrectValueAC = (flag: boolean) => {
  return {
    type: SET_ERROR,
    payload: flag
  } as const
}

export const setDefaultStartValueAC = (value: number) => {
  return {
    type: SET_DEFAULT_START_VALUE,
    payload: value
  } as const
}

export const setDefaultMaxValueAC = (value: number) => {
  return {
    type: SET_DEFAULT_MAX_VALUE,
    payload: value
  } as const
}