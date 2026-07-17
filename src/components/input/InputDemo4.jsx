import React, { useState } from "react";

export const InputDemo4 = () => {
  var countries = [
    { name: "india", states: ["guj", "mah", "mp"] },
    { name: "usa", states: ["texas", "california", "new york"] },
    { name: "uk", states: ["king's berry", "berghimgham", "abcd"] },
  ];
  const [selectedCountry, setselectedCountry] = useState("")

  const countryHandler = (event) => {
    console.log(event.target.value);
    setselectedCountry(event.target.value)
  };
  const stateHandler = (event)=>{
    console.log(event.target.value)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT DEMO 4</h1>
      <div>
        <select onChange={(event)=>{countryHandler(event)}}>
             <option  value="" disabled>SELECT COUNTRY</option>
            {
                countries.map((c)=>{
                    return <option value={c.name}>{c.name}</option>
                })
            }
        </select>
        {selectedCountry}
      </div>
      <div>
        <label>SELECT STATE</label>
        <select onChange={(event)=>{stateHandler(event)}}>
            <option  value="" disabled>SELECT STATE</option>
            {
                 
                selectedCountry && countries.find((c)=>c.name==selectedCountry).states.map((s)=>{
                    return <option value={s}>{s}</option>
                })
            }
        </select>
      </div>
    </div>
  );
};
