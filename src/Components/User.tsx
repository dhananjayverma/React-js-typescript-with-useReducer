import React, { useContext } from 'react'
import { UserContext } from '../App'

const User = () => {
  const {state,dispatch}=useContext(UserContext);
    
  return (
    <div>
    <h1>Name={state.name}</h1>
    <h1>age={state.age}</h1>

    <button onClick={()=>{
        dispatch({type:"CHANGE_NAME",payload:"subham"})
    }}>Update name</button>

    <button onClick={()=>{
        dispatch({type:"UPDATE_AGE",payload:20})
    }}>Update age</button>
    </div>
  )
}

export default User