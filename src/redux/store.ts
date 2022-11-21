import {combineReducers, legacy_createStore as createStore} from "redux";
import {settingsReducer} from "./reducers/settings-reducer";
import {counterReducer} from "./reducers/counter-reducer";
import {TSetCounterValueAC} from "./actions/types/TCounterAC";
import {TSettingsAC} from "./actions/types/TSettingsAC";

export const rootReducer = combineReducers({
  settings: settingsReducer,
  counter: counterReducer
})

export const store = createStore(rootReducer)


export type ActionsType = TSetCounterValueAC | TSettingsAC
export type AppStateType = ReturnType<typeof rootReducer>


export default store