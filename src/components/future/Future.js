import React from 'react'
import style from './Future.module.css'
import illustration from '../../assets/images/illustration-editor-desktop.svg'

const Future = () => {
  return (
    <div className={style.container}>
        <div className={style.title}><h2>Designed for the future</h2></div>
        <div className={style.containerFuture}>
            <div className={style.future1}>
                <div>
                <h3>Introducing an extensible editor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo, reprehenderit alias quo aliquid, quis accusantium suscipit ut distinctio libero dicta iste ducimus impedit incidunt aspernatur inventore. 
                    Labore et unde fugit?</p>
                    </div>
                    <div>
                    <h3>Introducing an extensible editor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo, reprehenderit alias quo aliquid, quis accusantium suscipit ut distinctio libero dicta iste ducimus impedit incidunt aspernatur inventore. 
                    Labore et unde fugit?</p>
                    </div>
            </div>
            <div className={style.future2}>
                
            </div>
        </div>
    </div>
  )
}

export default Future