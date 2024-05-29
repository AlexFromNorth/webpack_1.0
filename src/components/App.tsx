import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  const math = (number:number) => setCount(prev => prev + number )

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={()=>{math(1)}}>knock +</button>
      <button onClick={()=>{math(-1)}}>knock -</button>
      <p>{count}</p>
    </div>
  )
}

