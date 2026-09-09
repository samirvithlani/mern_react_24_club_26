import React from 'react'

export const MyTable = (props) => {
  //{headers:[]}
  console.log("mytable props",props)
  return (
    <table className='table'>
        <thead>
          <tr>
              {
                props.headers.map((th)=>{
                  return <th>{th}</th>
                })
              }
          </tr>
        </thead>
    </table>
  )
}
