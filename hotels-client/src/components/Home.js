import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Hotels from './Hotels'
import Footer from './Footer'


function Home() {
  return (
    <div className='home'>
      <NavBar/>
      <Header/>
      <Hotels />

      <Footer/>


    </div>
  )
}

export default Home