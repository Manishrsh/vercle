import React from 'react'
import Form from '../componets/Form'

const HomePage = () => {
    const FormData = {
        title : {
            key : 1,
            text : "Enter Your Git Url",
            style : "text-2xl font-bold text-white mb-4 mt-6 "
        } ,
        button : {
            key:2,
            text : "Submit",
            style : "bg-slate-200 px-4 py-2 rounded"
        },
        input : {
            key : 3,
            type : "text",
            style: "w-200 px-4 py-2 rounded border-2 border-blue-200 focus:outline-none focus:border-blue-500 bg-transparent"
        }
    }
  return (
    <div className='homewappper'>
            <div className='h-screen bg-slate-600 backgoundcs'>
            <Form FormData={FormData} />
            </div>
           

    </div>
  )
}

export default HomePage