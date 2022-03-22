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
        if(window.innerWidth < 760){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = ()=>{
        if(window.innerWidth < 760){
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
         
            <ul className={`${click ? style.menuActive  : style.menu}  `}>
                <li className={style.menuLink}><a className={style.links} href="#">Product <div className={style.iconArrow}><MdOutlineKeyboardArrowDown/></div></a></li>
                <li className={style.menuLink}><a className={style.links} href="#">Company <div className={style.iconArrow}><MdOutlineKeyboardArrowDown/></div></a></li>
                <li className={style.menuLink} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <a className={style.links} href="#">Contact <div className={style.iconArrow}><MdOutlineKeyboardArrowDown/></div></a>
               {dropdown && <Dropdown/>} 
               </li>
               <div className={style.containerBar}><div className={style.separate} ></div></div>
                
                 <div className={style.buttonsContainerMobile}>
           <Button style={{backgroundColor: "transparent", color: "#000"}} className={style.buttonTransparent}>Login</Button>
           <Button className={style.btn} style={{marginTop: "20px"}}>Sign Up</Button>
           </div>
            </ul>
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