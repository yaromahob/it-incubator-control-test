import {TCounterReducer} from "./types/TCounterRE";
import {TSetCounterValueAC} from "../actions/types/TCounterAC";


const initialState: TCounterReducer = {
  counterValue: 0
}



export const counterReducer = (state: TCounterReducer = initialState, action: TSetCounterValueAC) => {
  switch (action.type) {
    case "SET_COUNTER_VALUE":{
      return {
        ...state,
        counterValue: action.payload
      }
    }
  
    default: {
      return state
    }
  }
}