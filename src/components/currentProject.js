import React from 'react'
import { useSelector } from 'react-redux'

export default function CurrentProject() {
  const project = useSelector((state)=>state.project.value)
  return (
    <div className='container-fluid bg-dark text-white p-4'>
        <div className='display-1'>Current Project: {project.name} </div>
        <div>Admin: {project.admin}</div>
    </div>
  )
}
