import React from 'react'
import { useSelector } from 'react-redux'

export default function BottomComponent() {
    const project = useSelector((state)=>state.project.value)
  return (
    <div>
      <hr />
      <div>Project: {project.name + ' is handled by '+project.admin}</div>
    </div>
  )
}
