import React from 'react'
import style from './Footer.module.css'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <img src={Logo} alt="logo" />
        </div>
        <div className={style.links}>
            <h4>Product</h4>
            <ul>
            <li><a href="">overview</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Marketplace</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Integrations</a></li>
            </ul>
        </div>
        <div className={style.links}>
            <h4>Company</h4>
            <ul>
            <li><a href="">About</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            </ul>
        </div>
        <div className={style.links}>
            <h4>Connect</h4>
            <ul>
            <li><a href="">Contact</a></li>
            <li><a href="">Newsletter</a></li>
            <li><a href="">Linkedin</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer