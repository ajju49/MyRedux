import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux" // imported useSelector 
import {incNumber, decNumber, mulNumber, divNUM} from './Actions/Index'
function App() {
   
  const dispatch = useDispatch();  // to call an action we need dispatch
  const myState = useSelector((state)=> state.changeTheNumber)// slct d ste frm changeTheNumber(actionfile)
  return (
    <>
    <div className="container">
      <h1>Increment / Deccrement counter</h1>
      <h4>using react and redux</h4>
       
      <div className="quantity">
        <input type="text" name="quantity" className='quantity-input' value={myState} /> 
        <button className='quantity-plus' title="Increment" onClick={ ()=> dispatch(incNumber(1)) } ><span>+</span></button>
        <button className='quantity-minus' title="decrement" onClick={ ()=> dispatch(decNumber(2)) }><span>-</span></button>
     
        <button className='quantity-plus' title="Increment" onClick={ ()=> dispatch(mulNumber(7)) } ><span>*</span></button>
        <button className='quantity-plus' title="divide" onClick={ ()=> dispatch(divNUM (3)) } ><span>/</span></button>
       
      </div>
    </div>   
    </>
  )
}


export default App;


