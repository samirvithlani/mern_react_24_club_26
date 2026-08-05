import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {
    const gridsize = 5;
    const totlalTiles = gridsize * gridsize;
    const [clickedTiles, setclickedTiles] = useState([])

    const bombPos = useMemo(()=>{
        return Math.floor(Math.random()*totlalTiles)
    },[])
    const clickHandler = (index)=>{
        //add clicked index in array
        setclickedTiles([...clickedTiles,index])
        if(bombPos == index){
            alert("boooom.....")
        }

    }
    console.log("clicked tiles",clickedTiles)

    //const bombPos = Math.floor(Math.random()*totlalTiles)
    //useMemo

    

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO</h1>
        {bombPos}
        <div style={{
            display:"grid",
            gridTemplateColumns:`repeat(${gridsize},60px)`,
            gap:"10px",
            justifyContent:"center"
        }}>
            {
                Array.from({length:totlalTiles}).map((elm,index)=>{
                    return <div
                    onClick={()=>{clickHandler(index)}}

                     style={{
                        width:"60px",
                        height:"60px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        border:"1px solid black",
                        //backgroundColor:"white",
                        backgroundColor:clickedTiles.includes(index)?"gray":"white",
                        cursor:"pointer"
                    }}>
                        {index}
                    </div>
                })
            }

        </div>
    </div>
  )
}
