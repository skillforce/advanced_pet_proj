import {useState} from 'react';
import './Counter.scss'


export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)
    const onIncreaseCounter = () =>{
        setCounterValue(prev=>prev+1)
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <button onClick={onIncreaseCounter}>inc.</button>
        </div>
    );
};
