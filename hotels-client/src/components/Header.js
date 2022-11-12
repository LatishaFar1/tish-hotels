import React from 'react'
// import { FaHotel } from 'react-icons/fa';
import {SiHotelsdotcom} from 'react-icons/si';
import {TbPlaneInflight} from 'react-icons/tb';
import {BiBed} from 'react-icons/bi'
import {AiOutlineCalendar} from 'react-icons/ai'

function Header() {
  return (
    <div className='header'>
        <div className='HeaderContainer'>
            <div className='HeaderBox'>
            <SiHotelsdotcom /> <span>Booking</span>
            <TbPlaneInflight /> <span>Transportation</span>
            </div>


            <div className='Search'>
              <div className='SearchBox'>
                <BiBed />
                <input type='text' className='searchInput' placeholder="let's plan a trip!" />
                <AiOutlineCalendar />
                <input type='text' className='searchInput' placeholder='when are we going?' />
            
              </div>
            </div>
        </div>
    
    </div>
  )
}

export default Header