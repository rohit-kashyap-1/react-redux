import React from 'react'
import { useSelector } from 'react-redux'

export default function Todos() {
    const todos = useSelector((state)=>state.todo.value)
    
  return (
    <div>
      <h4>Todos</h4>
      <ul>
      {(todos.length!=0)?todos.map((item,index)=>{
            return <li key={index}>{item}</li>
      }):''}
      </ul>
    </div>
  )
}
