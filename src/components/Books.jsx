import React, { useState } from 'react'
import { BookList } from './BookList'

export const Books = () => {
  var name = "java"
  var bookData =["python","c","cpp"]
  const testBook = (x)=>{
    alert("test book"+x)
  }
  const [count, setcount] = useState(0)
  return (
    <div style={{textAlign:"center"}}>
        <h1>BOOKS</h1>
        <h1>Count p = {count}</h1>
        <BookList name = {name} data = {bookData} testBook = {testBook} count ={count} setcount ={setcount}></BookList>
    </div>
  )
}
