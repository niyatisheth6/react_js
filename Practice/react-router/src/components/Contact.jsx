import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <ul>
      <Link to="contact1" >
          <li >contact1</li>
        </Link>
        <Link to="contact2">
          <li>Contact2</li>
        </Link>
        <Outlet/>
      </ul>
    </div>
  )
}

export default Contact