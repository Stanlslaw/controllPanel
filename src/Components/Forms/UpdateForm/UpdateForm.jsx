import React from 'react'
import {Alert,Box,Button} from '@mui/material';

import "./UpdateForm.scss"

export default function UpdateForm(props){
    const handleButton=()=>{
        alert("Кнопка работает")
      }
    return(
        <Box className='UpdateFormBox'> 
        <Button className='UpdateFormButton' variant='contained' onClick={handleButton}>Обновить платформу</Button>
        <Alert className='UpdateFormAlert' severity="warning">Проверьте данные перед обновлением!</Alert>
        </Box>
    )
}