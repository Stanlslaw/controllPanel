import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import UpdateForm from '../Forms/UpdateForm/UpdateForm.jsx'
import DetailedForm from '../Forms/DetailedForm/DetailedForm.jsx'

import "./FormBody.scss"


export default function FormBody(props){
    const FormSelected=useSelector(state=>state.SelectedForm.value)
    const FormList=[1,<DetailedForm/>,3,4,<UpdateForm/>,6,7,8,9]

    return(
        <div className='FormBody'>
            {FormList[FormSelected-1]}
        </div>
    )

}