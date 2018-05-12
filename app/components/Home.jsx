import React from 'react'
import { Link } from 'react-router'
import Profile from './Profile'

const Home = () => {
  return (
    <div id="header-container">
        <h1>Welcome!</h1>
        <p>My name is Erika and I'm a fullstack developer with a passion for clean code and creative design. Check out these links or send me an email!</p>
        <Profile />
    </div>
  )
}

export default Home
