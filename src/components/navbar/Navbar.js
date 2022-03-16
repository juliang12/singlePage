import React, { useState } from 'react'
import style from './Navbar.module.css'
import Logo from '../../assets/images/logo.svg'
import Button from '../button/Button'
import IconHamburger from '../../assets/images/icon-hamburger.svg'
import IconClose from '../../assets/images/icon-close.svg'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Dropdown from '../dropdown/Dropdown'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }

    const onMouseEnter = ()=>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = ()=>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
  return (
    <div className={style.navbarContainer}>
        <div className={style.logoContainer}>
          <div className={style.logo}>
                <img src={Logo} alt="logo" />
          </div>
         <div className={style.navbar}>
            <ul className={`${!click ? style.menu : style.menuActive}  `}>
                <li className={style.menuLink}><a className={style.links} href="#">Product <MdOutlineKeyboardArrowDown/></a></li>
                <li className={style.menuLink}><a className={style.links} href="#">Company <MdOutlineKeyboardArrowDown/></a></li>
                <li className={style.menuLink} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <a className={style.links} href="#">Contact <MdOutlineKeyboardArrowDown/></a>
               {dropdown && <Dropdown/>} 
               </li>
              
            </ul>
           </div>
        </div>

        <div className={style.buttonsContainer}>
        <Button style={{backgroundColor: "transparent"}} className={style.buttonTransparent}>Login</Button>
        <Button>Sign Up</Button>
        </div>
        <div className={style.menuIcon} onClick={handleClick}>
         {!click ? <img src={IconHamburger} alt="icon" /> : <img src={IconClose} alt="icon" /> } 
        </div>
        </div>
  )
}

export default Navbar