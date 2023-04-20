import React from 'react'
import "../styles/navbar.css"

function NavBar() {
  return (
    <nav className='navbar'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207'/>
        <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar