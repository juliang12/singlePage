import React from 'react'
import style from './Header.module.css'
import PatternIntro from '../../assets/images/bg-pattern-intro-desktop.svg'
import Button from '../button/Button'

const Header = () => {
  return (
    <div className={style.HeaderContainer}>
        <div className={style.headerTitle}>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>

          <div className={style.buttonsContainer}>
            <Button style={{width: "150px"}}>Start for Free</Button>
            <Button>Learn More</Button>
          </div>
        </div>
    </div>
  )
}

export default Header
