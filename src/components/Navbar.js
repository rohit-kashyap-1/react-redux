import React from 'react'
import { useSelector } from 'react-redux'
export default function Navbar() {

const todos = useSelector((state)=>state.todo.value)

  const styles = {
    nav:{
        padding:'18px',
        display:'flex',
        backgroundColor:'#2c2c2c',
        color:'#fafafa'
    }
  }
  return (
    <div style={styles.nav}>
      <nav>
        <div>Total Tasks: {todos.length}</div>
      </nav>
    </div>
  )
}
