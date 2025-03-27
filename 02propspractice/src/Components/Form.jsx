import React from 'react'

function Form({handlebtn, obj}) {
  return (
    <>
    <p>Name : {obj.name} </p>
    <p>Age : {obj.age} </p>
    <button onClick={handlebtn}>Click me!</button>
    </>
  )
}

export default Form
