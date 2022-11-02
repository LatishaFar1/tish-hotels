import React from 'react'
// import { FaHotel } from 'react-icons/fa';
import {SiHotelsdotcom} from 'react-icons/si';
import {TbPlaneInflight} from 'react-icons/tb';

function Header() {
  return (
    <div className='header'>
        <div className='HeaderContainer'>
            <div className='HeaderBox'>
            <SiHotelsdotcom /> <span>Booking</span>
            <TbPlaneInflight /> <span>Transportation</span>
            </div>
        </div>
    
    </div>
  )
}

export default Header