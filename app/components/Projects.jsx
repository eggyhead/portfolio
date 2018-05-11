import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar.jsx'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <div id='project-grid'>
        <div className="project">
          <img src= '/adventure_landing.jpg' className='project-img' />
          <Link to='https://adventure-a-day.herokuapp.com/'><h3>Adventure A Day</h3></Link>
          <div>A progressive web app that allows users to complete scavenger hunts with a group in a single city or across several cities.</div>
        </div>
        <div className="project"><img src= '/dino-store-landing.jpg' className='project-img' />
          <Link to='https://dino-store.herokuapp.com/'><h3>Dino Store</h3></Link>
          <div>An e-commerce site which allows logged-in and guest users to enjoy a complete shopping experience. </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
