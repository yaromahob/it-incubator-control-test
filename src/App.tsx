import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

const STEP = 1
const DEFAULT_INITIAL_VALUE_COUNTER = 0
const DEFAULT_START_SETTINGS_VALUE = 0
const DEFAULT_MAX_SETTINGS_VALUE = 5
export const START_SETTINGS_VALUE = getValueLocalStorage('START_VALUE', DEFAULT_START_SETTINGS_VALUE)
export const MAX_SETTINGS_VALUE = getValueLocalStorage('MAX_VALUE', DEFAULT_MAX_SETTINGS_VALUE)

function getValueLocalStorage(key:string, defaultValue:number){
  let value = defaultValue
  const valueStorage = localStorage.getItem(key)
  if(valueStorage !== null) value = JSON.parse(valueStorage)
  return value
}

function saveValuesCounter(key: string, value: number){
  const localStorageValue = JSON.stringify(value)
  localStorage.setItem(key, localStorageValue)
}



function App() {
  const [counter, setCounter] = React.useState<number>(START_SETTINGS_VALUE)
  const [startValue, setStartValue] = React.useState<number>(START_SETTINGS_VALUE)
  const [maxValue, setMaxValue] = React.useState<number>(MAX_SETTINGS_VALUE)
  const [hasError, setHasError] = React.useState(false)
  const [hasSet, setHasSet] = React.useState(true)
  const resetValue = startValue
  const isDisabledReset = counter <= resetValue
  const isDisabledInc = counter === maxValue
  const setCounterCallback = () => {
    setCounter(prev => prev + STEP)
  }
  const resetCallback = () => setCounter(resetValue)
  
  const maxValueCallback = (value:number) => {
    setMaxValue(value)
    setHasError(value <= startValue)
    setHasSet(true)
  }
  
  const startValueCallback = (value:number) => {
    setStartValue(value)
    setCounter(value)
    setHasError(value < DEFAULT_INITIAL_VALUE_COUNTER || value >= maxValue)
    setHasSet(true)
  
  }
  
  const setValuesCallback = () => {
    saveValuesCounter('START_VALUE', startValue)
    saveValuesCounter('MAX_VALUE', maxValue)
    setHasSet(false)
  }
  
  return (
    <div className="App">
      <div className="counter-wrapper">
        <div className='settings'>
          <Settings hasError={hasError}
                    maxValue={maxValue}
                    startValue={startValue}
                    startValueCallback={startValueCallback}
                    maxValueCallback={maxValueCallback}
                    setValuesCallback={setValuesCallback}/>
        </div>
        <div className='counter'>
     <Counter counter={counter}
              hasError={hasError}
              hasSet={hasSet}
              maxValue={maxValue}
              startValue={startValue}
              setCounterCallback={setCounterCallback}
              resetCallback={resetCallback}
              isDisabledReset={isDisabledReset}
              isDisabledInc={isDisabledInc}
     />
        </div>
    </div>
      </div>
  );
}

export default App;
