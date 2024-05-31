import React, { useState } from 'react'
// import './App.module.scss'
import classes from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState(0)

  const math = (number:number) => setCount(prev => prev + number )

  return (
    <div>
      <h1>Hello world</h1>
      <button className={classes.button} onClick={()=>{math(1)}}><span>knock +</span></button>
      <button onClick={()=>{math(-1)}}><span>knock -</span></button>
      <p>{count}</p>
      <p>123</p>
    </div>
  )
}

