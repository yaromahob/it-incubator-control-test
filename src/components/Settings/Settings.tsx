import React from 'react';
import SettingsInputNumber from "./SettingsInputNumber";
import './settings.css'
import {MAX_VALUE_TITLE, START_VALUE_TITLE} from "../../constans/settings";
import UniversalButton from "../UniversalComponents/UniversalButton";

type SettingsPropsType = {
  hasError: boolean
  maxValue: number
  startValue: number
  startValueCallback: (value: number) => void
  maxValueCallback: (value: number) => void
  setValuesCallback: () => void
}

const Settings:React.FC<SettingsPropsType> = (props) => {

  const startValueHandler = (value: number) => {
    props.startValueCallback(value)
  }
  const maxValueHandler = (value: number ) => {
    props.maxValueCallback(value)
  }
  

  const setValuesHandler = () => {
    props.setValuesCallback()
  }
  
  return (
    <>
      <div className='input-wrapper'>
        <SettingsInputNumber error={props.hasError} title={MAX_VALUE_TITLE} value={props.maxValue} callback={maxValueHandler}/>
        <SettingsInputNumber error={props.hasError} title={START_VALUE_TITLE} value={props.startValue} callback={startValueHandler}/>
      </div>
      <div className='set'>
        <UniversalButton title='set' callback={setValuesHandler} buttonDisabled={props.hasError}/>
      </div>
    </>
  );
};

export default Settings;
