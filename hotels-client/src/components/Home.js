import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Hotels from './Hotels'


function Home() {
  return (
    <div className='home'>
      <NavBar/>
      <Header/>
      <Hotels />


    </div>
  )
}

export default Home