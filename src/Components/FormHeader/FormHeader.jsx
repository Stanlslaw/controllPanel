import React from 'react'
import { useState } from 'react'
import "./FormHeader.scss"



export default function FormHeader(){
    const [ButtonState,SetButtonState]=useState(1);

    const handleButton=(e)=>{
        let listNum=e.currentTarget.getAttribute("listnum")
        if(listNum==ButtonState) return
        for(let obj of e.currentTarget.parentNode.children){
            obj.className="FormHeaderButton"
        }
        e.currentTarget.className+=" choosed"
        SetButtonState(listNum)
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