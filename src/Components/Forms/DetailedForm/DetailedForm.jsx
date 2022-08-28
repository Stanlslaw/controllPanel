import { TableContainer,Paper, Table, TableHead, TableBody, TableRow, TableCell, Button,Box } from '@mui/material';
import React from 'react'
import './DetailedForm.scss'

export default function DetailedForm(props) {

  const handleButton=()=>{
    alert("Кнопка работает")
  }

  const genData=()=>{
    for(let i=0; i<35;i++){
    Data.push({email: "xxx@gmail.com", creationDate: "24.06.2004"})}
  }

  const Data=[]
  genData()

  return (
  <div className='DetailedForm'>
    <Box className='DetailedFormBox' >
     <TableContainer component={Paper}>
      <Table className='DetailedFormTable'>
        <TableHead>
          <TableRow >
            <TableCell >Email</TableCell><TableCell>Дата создания</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
        {Data.map((obj,index)=>{
        return(<TableRow key={index}><TableCell>{obj.email}</TableCell><TableCell>{obj.creationDate}</TableCell></TableRow>)
         })}
        </TableBody>
      </Table>
     </TableContainer>
     <Button sx={{marginBottom: "16px"}} variant="contained" onClick={handleButton}>Выгрузить</Button>
     </Box>
   </div>
  );
}