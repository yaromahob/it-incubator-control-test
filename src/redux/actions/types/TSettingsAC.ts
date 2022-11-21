import {
  setDefaultMaxValueAC,
  setDefaultStartValueAC,
  setErrorIncorrectValueAC,
  setMaxValueAC,
  setMinValueAC,
  setNewOptionsAC,
  setStartValueAC
} from "../settingsActions";

export type TSettingsAC =
    TSetStartValueAC
  | TSetMaxValueAC
  | TSetMinValueAC
  | TSetNewOptionsAC
  | TSetErrorIncorrectValueAC
  | TSetDefaultStartValueAC
  | TSetDefaultMaxValueAC

export type TSetStartValueAC = ReturnType<typeof setStartValueAC>
export type TSetMaxValueAC = ReturnType<typeof setMaxValueAC>
export type TSetMinValueAC = ReturnType<typeof setMinValueAC>
export type TSetNewOptionsAC = ReturnType<typeof setNewOptionsAC>
export type TSetErrorIncorrectValueAC = ReturnType<typeof setErrorIncorrectValueAC>
export type TSetDefaultStartValueAC = ReturnType<typeof setDefaultStartValueAC>
export type TSetDefaultMaxValueAC = ReturnType<typeof setDefaultMaxValueAC>