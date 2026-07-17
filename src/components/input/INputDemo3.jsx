import React from 'react'

export const INputDemo3 = () => {

    var countries = ["india","usa","china","uk"]

    const countryHandler = (event)=>{
        console.log(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 3</h1>
        <div>
            {/* <select onChange={(event)=>{countryHandler(event)}}>
                <option value="" disabled>SELECT COUNTRY</option>
                <option value="india">INDIA</option>
                <option value="china">China</option>
                <option value="usa">Usa</option>
                <option value="uk">UK</option>
            </select> */}
            <select onChange={(event)=>{countryHandler(event)}}>
                <option  value="" disabled>SELECT COUNTRY</option>
                {
                    countries.map((c)=>{
                        return <option value={c}>{c.toUpperCase()}</option>
                    })
                }
            </select>
        </div>
    </div>
  )
}
