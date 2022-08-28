import React from 'react'
import './Form.scss'

import FormHeader from "../FormHeader/FormHeader.jsx"
import FormBody from '../FormBody/FormBody.jsx'




export default function Form(props){
    return(
       <div className='Form'>
         <FormHeader/>
         <FormBody/>
       </div>
    )
}