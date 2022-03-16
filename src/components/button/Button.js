import React from 'react'
import './Button.css'

const Button = ({className, children, ...rest}) => {
  return (
    <button {...rest} className={`${className} button`}>{children}</button>
  )
}

export default Button