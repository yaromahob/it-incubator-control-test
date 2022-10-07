import React from 'react';

type TUniversalButton = {
  title: string
  callback: () => void
  buttonDisabled: boolean
}

const UniversalButton: React.FC<TUniversalButton> = ({title,callback, buttonDisabled}) => {
  const onClickHandler = () => {
    callback()
  }
  return (
    <button disabled={buttonDisabled} onClick={onClickHandler}>{title}</button>
  );
};

export default UniversalButton;
