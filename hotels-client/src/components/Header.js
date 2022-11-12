import React, {useState} from 'react'
// import { FaHotel } from 'react-icons/fa';
import {SiHotelsdotcom} from 'react-icons/si';
import {TbPlaneInflight} from 'react-icons/tb';
import {BiBed} from 'react-icons/bi';
import {AiOutlineCalendar} from 'react-icons/ai';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Header() {

  const [date, setDate] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'compare'
    }
  })

  const [open, setOpen] = useState(false)

  return (
    <div className='header'>
        <div className='HeaderContainer'>
            <div className='HeaderBox'>
            <SiHotelsdotcom /> <span>Booking</span>
            <TbPlaneInflight /> <span>Transportation</span>
            </div>


            <div className='Search'>
              <div className='SearchBox'>
                <BiBed className='SearchIcon'/>
                <input type='text' className='SearchInput' placeholder="let's plan a trip!" />
                    <div className='CalendarBox' >
                     <AiOutlineCalendar className='SearchIcon' />
                      <span onClick={()=> setOpen(!open)}> Month, Date, Year </span>
                          {open && (
                          <DateRangePicker
                            className='calendar'
                            onChange={item => setDate({ ...date, ...item })}
                            months={1}
                            minDate={addDays(new Date(), -300)}
                            maxDate={addDays(new Date(), 900)}
                            direction="vertical"
                            scroll={{ enabled: true }}
                            ranges={[date.selection, date.compare]}
                          /> )}
                      </div>
                <input type='text' className='SearchInput' placeholder='when are we going?' />
                <button className='SearchButton'>Search</button>
              </div>
            </div>
        </div>
    
    </div>
  )
}

export default Header