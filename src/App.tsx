import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
  const [counter, setCounter] = React.useState<number>(0)
  const [startValue, setStartValue] = React.useState<number>(0)
  const [maxValue, setMaxValue] = React.useState<number>(5)
  const [error, setError] = React.useState(false)
  const resetValue = startValue
  const fullValue = maxValue
  const isDisabledReset = counter <= resetValue
  const isDisabledInc = counter === fullValue
  const setCounterCallback = () => setCounter(counter + 1)
  const resetCallback = () => setCounter(resetValue)
  const maxValueCallback = (value:number) => setMaxValue(value)
  const startValueCallback = (value: number) => {
    setStartValue(value)
    setCounter(value)
    setError(value < 0)
  }
  
  return (
    <div className="App">
      <div className="counter-wrapper">
        <div className='settings'>
          <Settings maxValue={maxValue}
                    startValue={startValue}
                    maxValueCallback={maxValueCallback}
                    startValueCallback={startValueCallback}/>
        </div>
        <div className='counter'>
     <Counter counter={counter}
              error={error}
              maxValue={maxValue}
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
