import React from 'react';
import SettingsInputNumber from "./SettingsInputNumber";
import './settings.css'

type SettingsPropsType = {
  maxValue: number
  startValue: number
  maxValueCallback: (value: number) => void
  startValueCallback: (value: number) => void
}

const Settings:React.FC<SettingsPropsType> = (props) => {
  const [startValue, setStartValue] = React.useState<number>(props.startValue)
  const [maxValue, setMaxValue] = React.useState<number>(props.maxValue)
  const maxValueTitle = 'max value'
  const startValueTitle = 'start value'

  const setValuesHadler = () => {
    props.startValueCallback(startValue)
    props.maxValueCallback(maxValue)
  }
  
  return (
    <>
      <div className='input-wrapper'>
        <SettingsInputNumber title={maxValueTitle} value={maxValue} callback={setMaxValue}/>
        <SettingsInputNumber title={startValueTitle} value={startValue} callback={setStartValue}/>
      </div>
      <div className='set'>
        <button onClick={setValuesHadler}>set</button>
      </div>
    </>
  );
};

export default Settings;
