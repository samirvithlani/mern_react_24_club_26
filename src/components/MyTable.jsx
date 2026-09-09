import React from 'react'

export const MyTable = (props) => {
  //{headers:[],users:[]}
  //["id","name","age","email"],
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
        <tbody>
              {
                //{id:1,name:"amit",age:23,salary:23000},
                props.data.map((tr)=>{
                  //["id","name","age","email"],
                  return <tr>
                    
                    {
                      props.headers.map((td)=>{
                        return <td>{tr[td]}</td>
                      })
                    }
                  </tr>
                })
              }
        </tbody>
    </table>
  )
}
