import React, { useState } from 'react'
import { menuItems } from './MenuItem'
import './Dropdown.css'

const Dropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }
  return (
    <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {menuItems.map((item,index)=>{
            return(
                <li key={index}>
                    <a className={item.cName} href={item.path} onClick={()=>setClick(false)}>{item.title}</a>
                </li>
            )
        })}
    </ul>
  )
}

export default Dropdown