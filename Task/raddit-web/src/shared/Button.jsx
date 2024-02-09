import React from 'react'

function Button({title,btn}) {
  return (
    <button className={`btn_primary ${btn}`}>{title}</button>
  )
}

export default Button