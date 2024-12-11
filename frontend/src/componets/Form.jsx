import React from 'react'

const Form = ({FormData}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-transparent border-2 border-btn rounded p-8 w-6/12 mt-6 h-96 shadow-2xl shadow-primary backdrop-filter backdrop-blur-lg bg-white bg-opacity-5'>
      
    <h1 className={FormData.title.style}>{FormData.title.text}</h1>

    <input type={FormData.input.type} className={FormData.input.style} />

    <button className={FormData.button.style}>{FormData.button.text}</button>
  
  
  
  
  </div>
  </div>
  )
}

export default Form