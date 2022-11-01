import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>Footer
    <div className='socialMedia'>
    <GitHubIcon />
    <LinkedInIcon />
    </div>
    <p> &copy; 2022 michaelreyes</p>
    </div>
  )
}

export default Footer