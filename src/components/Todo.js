import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add } from '../reducers/todoSlice'

export default function Todo() {
  const [value,setValue] = useState('')
  const todos = useSelector((state)=>state.todo.value)
  const dispatch =  useDispatch() //function, 
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <button onClick={()=>{dispatch(add(value)); setValue('')}}>Add Todo</button>
    </div>
  )
}
