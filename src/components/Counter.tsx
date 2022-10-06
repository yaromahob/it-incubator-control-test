import React from 'react';
import './counter.css'
import Increment from "./Increment";
import Reset from './Reset';

type TCounterProps = {
  counter: number
  setCounterCallback: () => void
  resetCallback: () => void
  isDisabledReset: boolean
  isDisabledInc: boolean
}

const Counter: React.FC<TCounterProps> = ({counter,setCounterCallback,resetCallback, isDisabledReset, isDisabledInc}) => {
  const fullValueClass = counter === 5 ? 'red' : ''
  
  return (
    <div className='counter'>
        <div className="counter-wrapper">
          <h2 className={fullValueClass}>{counter}</h2>
          <div className='buttons-wrapper'>
            <Increment
              setCounterCallback={setCounterCallback}
              isDisabledInc={isDisabledInc}
            />
            <Reset
              resetCallback={resetCallback}
              isDisabledReset={isDisabledReset}
            />
          </div>
        </div>
    </div>
  );
};

export default Counter;
