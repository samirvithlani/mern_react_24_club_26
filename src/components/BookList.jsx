import React from 'react'
import { SubBookList } from './SubBookList'

//props -->is not keyword
export const BookList = (props) => {
  //props --> {name:"",data:[],testBook:fun,setcount}
  console.log("booklist props",props)
  return (
    <div>BookList
      <h1>Name = {props.name}</h1>
      {
        props.data.map((d)=>{
          return<li>{d}</li>
        })
      }
      {/* <button onClick={props.testBook}>TEST BOOK</button> */}
      <button onClick={()=>{props.testBook(100)}}>TEST BOOK</button>
      <button onClick={()=>{props.setcount(props.count+1)}}>increse</button>


      <SubBookList name = {props.name}></SubBookList>
    </div>
  )
}
