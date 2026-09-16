import React, { useContext } from 'react'
import { UniContext } from './UniContext'

export const Student = () => {
    const {uniName} = useContext(UniContext)
  return (
    <div>
        <h1>Student - {uniName}</h1>
    </div>
  )
}
