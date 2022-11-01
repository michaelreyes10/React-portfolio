import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className= 'navbar'>
        <div className='toggleButton'>
            <button> </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/Expirience'>Expirience</Link>
        </div>
    </div>
  )
}

export default Nav