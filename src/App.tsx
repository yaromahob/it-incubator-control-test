import React from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = React.useState<number>(0)
  const resetValue = 0
  const isDisabledReset = counter <= 0
  const isDisabledInc = counter === 5
  const setCounterCallback = () => setCounter(counter + 1)
  const resetCallback = () => setCounter(resetValue)
  
  return (
    <div className="App">
     <Counter counter={counter}
              setCounterCallback={setCounterCallback}
              resetCallback={resetCallback}
              isDisabledReset={isDisabledReset}
              isDisabledInc={isDisabledInc}
     />
    </div>
  );
}

export default App;
