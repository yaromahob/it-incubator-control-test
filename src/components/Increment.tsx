import React from 'react';

type TIncrementProps = {
  setCounterCallback: () => void
  isDisabledInc: boolean
}

const Increment:React.FC<TIncrementProps> = ({setCounterCallback, isDisabledInc}) => {
  const onclickHandler = () => setCounterCallback()
  
  
  return (

    <button disabled={isDisabledInc} onClick={onclickHandler}>inc</button>
  );
};

export default Increment;

