import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set } from '../reducers/projectSlice'

export default function SetProject() { 
  const [projectName,setProjectName] = useState('')
  const [adminName,setAdminName] = useState('')
  const dispatch = useDispatch()
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-5'>
                <div className='p-4 rounded border'>
                    <select className='form-control form-select mb-3' value={projectName} onChange={(e)=>setProjectName(e.target.value)}>
                        <option value={'Project 1'}>Project 1</option>
                        <option value={'Project 2'}>Project 2</option>
                        <option value={'Project 3'}>Project 3</option>
                        <option value={'Project 4'}>Project 4</option>
                    </select>
                    <input type='text' className='form-control rounded-0 mb-4' placeholder='Admin Name' onChange={(e)=>setAdminName(e.target.value)} value={adminName} />
                    <button onClick={()=>{dispatch(set({name:projectName,admin:adminName}))}}  className='btn btn-dark'>Set Project</button>
                </div>
            </div>
        </div>
    </div>
  )
}
