import {useState} from 'react';
import s from './Counter.module.scss'


export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const onIncreaseCounter = () =>{
        setCounterValue(prev=>prev+1)
    }

    return (
        <div className={s.counterContainer}>
            <h1 className={s.counterValueTitle}>{counterValue}</h1>
            <button className={s.counterIncreaseBtn} onClick={onIncreaseCounter}>inc.</button>
        </div>
    );
};
