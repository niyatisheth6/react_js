import React from 'react'

function Button({title,onchange,type}) {
  return (
    <div className="form-group">
    <label className="form-label">{title} :</label>
    <br />
    <input
      type={type}
      className="form-control"
      placeholder="Enter Title"
      onChange={onchange}
    />
  </div>
  )
}

export default Button