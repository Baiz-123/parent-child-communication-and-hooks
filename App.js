import React from 'react';
import './App.css';
import  Employee from './Employee';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';

function App() {
let [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}
  const counter = useSelector( (state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
    <h1>Counter: {counter}</h1>
   <button onClick={(()=> dispatch({type:"INCREMENT"}))}>+</button>
   <button onClick={(()=> dispatch({type:"DECREMENT"}))}>-</button>
   
     <button onClick={handleClick}>usestate</button><h1>{count}</h1>
  
   <Employee name="Baiz" empid="1001"></Employee>
   </div>
   
   
  );
}

export default App;
