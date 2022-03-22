import React from 'react'
import style from './Infrastructure.module.css'
import image from '../../assets/images/illustration-phones.svg'

const Infrastructure = () => {
  return (
    <div className={style.container}>
       
        <div className={style.imgContainer}>
              <div className={style.background}>
                  <img src={image} alt="" />
              </div>
              <div className={style.content}>
                  <h2 className="title">State of the art Infrastructure</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptas harum assumenda perferendis quam quisquam aut voluptatem iste dolorem delectus!</p>
              </div>
        </div>
    </div>
  )
}

export default Infrastructure