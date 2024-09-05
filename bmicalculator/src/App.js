import React, {useMemo, useState} from 'react'
import './App.css'

const App = () => {
  const[height, setHeight]=useState(180);
  const[weight, setWeight]=useState(70);
  function onweightchange(event){
    setWeight(event.target.value)
  }
  function onheightchange(event){
    setHeight(event.target.value)
  }
  const output=useMemo(()=>{
    const mheight=height/100;
    return(weight/(mheight*mheight)).toFixed(1)
  },[weight, height])
  return (
    <div>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'> {weight}</p>
        <input className='slider-input' type='range' step="1" min="40" max="200" onChange={onweightchange}/>
        <p className='slider-output'>{height}</p>
        <input className='slider-input' type='range' step='1' min="140" max="220" onChange={onheightchange}/>
      </div>
      <div className='output-section'>
        <p> your BMI IS </p>
        <p className='output'>{output}</p>
      </div>
    </div>
  )
}

export default App
