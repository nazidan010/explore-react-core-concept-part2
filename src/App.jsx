import { useState } from 'react'
import './App.css'
import Counter from '../counter';
import Team from '../Team';
import Users from '../Users';
import Friends from '../Friends';

function App() {
  function handleClick(){
    alert('Button Click 1');
  }
  const handleClick2=()=>{
    alert('Button Click 2');
  }
  const addToFive=(num)=>{
    alert(num+5);
  }
  return (
    <>
      <h2>React Core Concept Part 2</h2>
      <Counter></Counter>
      <button onClick={handleClick}>Click Here 1</button>
      <button onClick={handleClick2}>Click Here 2</button>
      <button onClick={()=>{alert('Button Click 3')}}>Click Here 3</button>
      {/* Bejailla Jinis */}
      <button onClick={()=>{addToFive(10)}}>Click Here 4</button> 

      <Team></Team> 
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
