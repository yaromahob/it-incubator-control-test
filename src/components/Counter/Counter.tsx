import React from 'react';
import './counter.css'
import UniversalButton from "../UniversalComponents/UniversalButton";
import {MAX_SETTINGS_VALUE, START_SETTINGS_VALUE} from "../../App";

type TCounterProps = {
  hasError: boolean
  hasSet: boolean
  counter: number
  maxValue: number
  startValue: number
  setCounterCallback: () => void
  resetCallback: () => void
  isDisabledReset: boolean
  isDisabledInc: boolean
}



const Counter: React.FC<TCounterProps> = ({counter,setCounterCallback,resetCallback, isDisabledReset, isDisabledInc, maxValue,startValue, hasError, hasSet}) => {
  const fullValueClass = counter === maxValue ? 'red' : ''
  const isDifferentValues = (startValue !== START_SETTINGS_VALUE || maxValue !== MAX_SETTINGS_VALUE) && hasSet
  const isIncorrectValue = startValue === maxValue || hasError
  console.log(isDifferentValues);
  return (
          <div className="buttons">
            {isIncorrectValue
              ? <h2 className='error'>Incorrect value</h2>
              : isDifferentValues
              ? <h2 className='hasSet'>Enter values and press 'set'</h2>
              : <h2 className={fullValueClass}>{counter}</h2>}
            <div className='buttons-wrapper'>
              <UniversalButton
                title='inc'
                callback={setCounterCallback}
                buttonDisabled={hasError ? hasError : isDisabledInc}/>
              <UniversalButton
                title='reset'
                callback={resetCallback}
                buttonDisabled={hasError ? isDisabledReset : isDisabledReset}/>
            </div>
          </div>
  );
};

export default Counter;
