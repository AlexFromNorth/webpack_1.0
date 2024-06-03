import React, { useState } from 'react'
// import './App.scss'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import AvatarPng from '../assets/hellboy.jpg'

export const App = () => {
  const [count, setCount] = useState(0)

  const math = (number:number) => setCount(prev => prev + number )



  return (
    <div>
      {__PLATFORM__ === "desktop" ? <div>ISDESKTOPPLATFORM</div> : <div>ISMOBILEPLATFORM</div>}
      <h1>Platform={__PLATFORM__}</h1>
      <div>
        <img src={AvatarPng} alt=""  height='500vh'/>
      </div>

      <Link to={'about'}>about</Link>
      <br />
      <Link to={'/shop'}>shop</Link>
      <br />
      <h1>Hello world</h1>
      <button className={classes.button} onClick={()=>{math(1)}}><span>knock +</span></button>
      <button className={classes.test} onClick={()=>{math(-1)}}><span>knock -</span></button>
      <p>{count}</p>
      <p>123</p>
      <Outlet/>
    </div>
  )
}

