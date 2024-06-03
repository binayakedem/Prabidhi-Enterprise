import React from 'react'
import Body from '../Components/Body'
import Services from '../Components/Services'
import RecentProject from '../Components/RecentProject'
import Technologies from '../Components/Technologies'
import Clients from '../Components/Clients'
import Contact from '../Components/Contact'
const Home = () => {
  return (
    <div className='bg-white'>
    <Body/>
    <Services/>
    <RecentProject/>
    <Technologies/>
    <Clients/>
    <Contact/>
    </div>
  )
}

export default Home