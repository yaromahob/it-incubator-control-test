import React from 'react';
import './counter.css'
import UniversalButton from "../UniversalComponents/UniversalButton";

type TCounterProps = {
  error: boolean
  counter: number
  maxValue: number
  setCounterCallback: () => void
  resetCallback: () => void
  isDisabledReset: boolean
  isDisabledInc: boolean
}



const Counter: React.FC<TCounterProps> = ({counter,setCounterCallback,resetCallback, isDisabledReset, isDisabledInc, maxValue, error}) => {
  
  const fullValueClass = counter === maxValue ? 'red' : ''

  
  return (
          <div className="buttons">
            {error ? 'Incorrect value' : <h2 className={fullValueClass}>{counter}</h2>}
            <div className='buttons-wrapper'>
              <UniversalButton
                title='inc'
                callback={setCounterCallback}
                buttonDisabled={isDisabledInc}/>
              <UniversalButton
                title='reset'
                callback={resetCallback}
                buttonDisabled={isDisabledReset}/>
            </div>
          </div>
  );
};

export default Counter;
