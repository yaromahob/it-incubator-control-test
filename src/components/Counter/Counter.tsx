import React from 'react';
import './counter.css'
import UniversalButton from "../UniversalComponents/UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setCounterValueAC} from "../../redux/actions/counterActions";




const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)
  const startCounterValue = useSelector<AppStateType, number>(state => state.settings.startCounterValue)
  const maxCounterValue = useSelector<AppStateType, number>(state => state.settings.maxCounterValue)
  const hasErrorValue = useSelector<AppStateType, boolean>(state => state.settings.incorrectValue)
  const hasSetValue = useSelector<AppStateType, boolean>(state => state.settings.savedNewOptions)
  const defaultStartValue = useSelector<AppStateType, number>(state => state.settings.defaultStartValue)
  const defaultMaxValue = useSelector<AppStateType, number>(state => state.settings.defaultMaxValue)
  const resetValue = startCounterValue
  const isDisabledReset = counterValue <= resetValue || hasSetValue
  const isDisabledInc = counterValue === maxCounterValue || hasSetValue
  
  const setCounterCallback = () => {
    dispatch(setCounterValueAC(counterValue + 1))
  }
  const resetCallback = () => dispatch(setCounterValueAC(resetValue))
  
  
  const fullValueClass = counterValue === maxCounterValue ? 'red' : ''
  const isDifferentValues = (startCounterValue !== defaultStartValue || maxCounterValue !== defaultMaxValue) && hasSetValue
  const isIncorrectValue = startCounterValue === maxCounterValue || hasErrorValue
  
  
  return (
          <div className="buttons">
            {isIncorrectValue
              ? <h2 className='error'>Incorrect value</h2>
              : isDifferentValues
              ? <h2 className='hasSet'>Enter values and press 'set'</h2>
              : <h2 className={fullValueClass}>{counterValue}</h2>}
            <div className='buttons-wrapper'>
              <UniversalButton
                title='inc'
                callback={setCounterCallback}
                buttonDisabled={hasErrorValue ? hasErrorValue : isDisabledInc}/>
              <UniversalButton
                title='reset'
                callback={resetCallback}
                buttonDisabled={hasErrorValue ? isDisabledReset : isDisabledReset}/>
            </div>
          </div>
  );
};

export default Counter;
