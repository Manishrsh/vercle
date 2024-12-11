import React from 'react'
import Form from '../componets/Form'
import Header from '../componets/Header'

const HomePage = () => {
    const FormData = {
        title : {
            key : 1,
            text : "Enter  Git Url",
            style : "text-3xl font-bold text-white mb-4 mt-6 lato-bold"
        } ,
        button : {
            key:2,
            text : "Submit",
            style : "bg-primary px-4 py-2 rounded-xl w-1/2 hover:bg-slate-300 mt-5 text-white text-lg font-medium "

        },
        input : {
            key : 3,
            type : "text",
            style: "w-200 px-4 py-2 rounded border-2 border-blue-200 focus:outline-none focus:border-blue-500 bg-transparent rounded-xl text-white w-full"
        }
    }
  return (
    <div className='homewappper'>
            <div className='h-full bg-slate-600 backgoundcs'>
                <Header/>
            <Form FormData={FormData} />
            </div>
           

    </div>
  )
}

export default HomePage