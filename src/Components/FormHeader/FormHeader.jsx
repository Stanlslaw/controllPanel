import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { UpdateSelected } from '../../Slices/SelectedFormSlice.js';
import "./FormHeader.scss"



export default function FormHeader(props){
    const ButtonState=useSelector((state)=>state.SelectedForm.value)
    const dispatch=useDispatch()

    const handleButton=(e)=>{
        let listNum=e.currentTarget.getAttribute("listnum")
        if(listNum==ButtonState) return
        for(let obj of e.currentTarget.parentNode.children){
            obj.className="FormHeaderButton"
        }
        e.currentTarget.className+=" choosed"
        dispatch(UpdateSelected(listNum))
    }

    return(
        <div className='FormHeader'>
            <div className='FormHeaderButton choosed' listnum={"1"} onClick={handleButton}><p>Поиск</p></div>
            <div className='FormHeaderButton' listnum={"2"} onClick={handleButton}><p>Подробно</p></div>
            <div className='FormHeaderButton' listnum={"3"} onClick={handleButton}><p>Процессы</p></div>
            <div className='FormHeaderButton' listnum={"4"} onClick={handleButton}><p>Добавление</p></div>
            <div className='FormHeaderButton' listnum={"5"} onClick={handleButton}><p>Обновление</p></div>
            <div className='FormHeaderButton' listnum={"6"} onClick={handleButton}><p>Заказать Доступ</p></div>
            <div className='FormHeaderButton' listnum={"7"} onClick={handleButton}><p>Список баз</p></div>
            <div className='FormHeaderButton' listnum={"8"} onClick={handleButton}><p>Квоты</p></div>
            <div className='FormHeaderButton' listnum={"9"} onClick={handleButton}><p>Сервисы 1C</p></div>
        </div>
    )
}