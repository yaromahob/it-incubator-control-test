import React, {ChangeEvent} from 'react';


type InputNumberPropsType = {
  title: string
  value: number
  callback: (value: number) => void
}

const SettingsInputNumber:React.FC<InputNumberPropsType> = (props) => {
  
  const callbackHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.callback(Number(e.target.value))
  }
  
  
  return (
    <div className='settings-input'>
      <h4>{props.title}:</h4>
      <input type="number" value={props.value} onChange={callbackHandler} />
    </div>
  );
};

export default SettingsInputNumber;
