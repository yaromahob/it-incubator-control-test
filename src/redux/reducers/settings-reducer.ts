import {TSettingsRE} from "./types/TSettingsRE";
import {TSettingsAC} from "../actions/types/TSettingsAC";
import {
  SET_DEFAULT_MAX_VALUE,
  SET_DEFAULT_START_VALUE, SET_ERROR,
  SET_MAX_VALUE,
  SET_MIN_VALUE, SET_NEW_OPTIONS,
  SET_START_VALUE
} from "../actions/settingsActions";


const initialState: TSettingsRE = {
  defaultStartValue: 0,
  defaultMaxValue: 5,
  startCounterValue: 0,
  maxCounterValue: 5,
  minCounterValue: 0,
  savedNewOptions: true,
  incorrectValue: false
}


export const settingsReducer = (state:TSettingsRE = initialState, action: TSettingsAC) => {
  switch (action.type) {
    case SET_START_VALUE: {
      return {
        ...state,
        startCounterValue: action.payload
      }
    }
    
    case SET_MAX_VALUE: {
      return {
        ...state,
        maxCounterValue: action.payload
      }
    }
    
    case SET_MIN_VALUE: {
      return {
        ...state,
        minCounterValue: action.payload
      }
    }
  
    case SET_DEFAULT_MAX_VALUE: {
      return {
        ...state,
        defaultMaxValue: action.payload
      }
    }
  
    case SET_DEFAULT_START_VALUE: {
      return {
        ...state,
        defaultStartValue: action.payload
      }
    }
  
    case SET_ERROR: {
      return {
        ...state,
        incorrectValue: action.payload
      }
    }
  
    case SET_NEW_OPTIONS: {
      return {
        ...state,
        savedNewOptions: action.payload
      }
    }
  
    default: {
      return state
    }
  }
}