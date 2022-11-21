import React from 'react';
import SettingsInputNumber from "./SettingsInputNumber";
import UniversalButton from "../UniversalComponents/UniversalButton";
import {MAX_VALUE_TITLE, START_VALUE_TITLE} from "../../constans/settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  setDefaultMaxValueAC,
  setDefaultStartValueAC,
  setErrorIncorrectValueAC,
  setMaxValueAC,
  setNewOptionsAC,
  setStartValueAC
} from "../../redux/actions/settingsActions";
import {setCounterValueAC} from "../../redux/actions/counterActions";
import './settings.css'



const Settings:React.FC = () => {
  const dispatch = useDispatch()
  const startCounterValue = useSelector<AppStateType, number>(state => state.settings.startCounterValue)
  const maxCounterValue = useSelector<AppStateType, number>(state => state.settings.maxCounterValue)
  const defaultStartValue = useSelector<AppStateType, number>(state => state.settings.defaultStartValue)
  const defaultMaxValue = useSelector<AppStateType, number>(state => state.settings.defaultMaxValue)
  const hasError = useSelector<AppStateType, boolean>(state => state.settings.incorrectValue)
  
  const maxValueHandler = (value: number) => {
    dispatch(setMaxValueAC(value))
    dispatch(setErrorIncorrectValueAC(value <= startCounterValue))
    dispatch(setNewOptionsAC(defaultMaxValue !== value))
  }
  
  const startValueHandler = (value: number) => {
    dispatch(setStartValueAC(value))
    dispatch(setErrorIncorrectValueAC( value < 0 || value >= maxCounterValue))
    dispatch(setNewOptionsAC(defaultStartValue !== value))
  }
  
  const setSettingsHandler = () => {
    dispatch(setCounterValueAC(startCounterValue))
    dispatch(setDefaultStartValueAC(startCounterValue))
    dispatch(setDefaultMaxValueAC(maxCounterValue))
    dispatch(setNewOptionsAC(false))
  }
  
  return (
    <>
      <div className='input-wrapper'>
        <SettingsInputNumber error={hasError} title={MAX_VALUE_TITLE} value={maxCounterValue} callback={maxValueHandler}/>
        <SettingsInputNumber error={hasError} title={START_VALUE_TITLE} value={startCounterValue} callback={startValueHandler}/>
      </div>
      <div className='set'>
        <UniversalButton title='set' callback={setSettingsHandler} buttonDisabled={hasError}/>
      </div>
    </>
  );
};

export default Settings;
