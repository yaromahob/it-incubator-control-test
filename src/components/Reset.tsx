import React from 'react';

type TResetProps = {
  resetCallback: () => void
  isDisabledReset: boolean
}

const Reset: React.FC<TResetProps> = ({resetCallback, isDisabledReset}) => {
  const onClickHandler = () => {
    resetCallback()
  }
  return (
    <button disabled={isDisabledReset} onClick={onClickHandler}>reset</button>
  );
};

export default Reset;
