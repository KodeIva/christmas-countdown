import { useEffect, useState } from 'react'
import './App.css'
import Snowfall from 'react-snowfall'
import { PiCalendarDotsFill } from "react-icons/pi";

function App() {
  
  const christmasDay = new Date('December 25,2024 00:00:00').getTime()
  const [days, setDays] = useState(0)
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isChristmas, setIsChristmas] = useState(false)
  
  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
  let day = new Date().getDate()
  let month = months[new Date().getMonth()]
  let year = new Date().getFullYear()
  let currentDay = `${day}  ${month}  ${year}`


useEffect(() => {

  const timer = setInterval(() => {
   let currentTime = new Date().getTime()
   let daysLeft = christmasDay - currentTime

   if(daysLeft > 0) {
    let days = Math.floor(daysLeft / (24*60*60*1000))
    let hour = Math.floor(daysLeft/(1000*60*60) % 24)
    let mins = Math.floor((daysLeft % (60*60*1000))/(60*1000))
    let sec = Math.floor((daysLeft % (60*1000)) / 1000)
  
    setDays(days)
    setHour(hour)
    setMinutes(mins)
    setSeconds(sec)
   }else{
    setIsChristmas(true)
  }
  }, 1000)
  return() => clearInterval(timer)
  
},[christmasDay])

  return (
    <div style={{ height: 1000, width: 1800, position: 'relative' }}>
        <Snowfall snowflakeCount={800} />
     <div className='cr-day m-10 '>
      <h4 className='text-white text-lg leading-snug font-light'>How many days until</h4>
      <h1 className='text-white text-6xl leading-snug font-semibold'>Christmas Day</h1>
      <span className='flex items-center text-white text-lg leading-snug font-light'>
        <PiCalendarDotsFill  />
        Wednesday, 25 December 2024
      </span>
     </div>
    
      <div className='flex flex-col items-center text-white mx-10 mt-60  w-[400px]'>
        <div className='flex flex-col items-center'>
          <h2 className='text-[140px] font-bold'>{days}</h2>
          <p className='text-xl'>days</p>
        </div>
        <div className='flex'>
          <span className='flex flex-col py-7 px-8 items-center text-6xl leading-relaxed'> 
             {hour < 10 ? `0${hour}` : hour} 
               <p className='text-sm'>hours</p>  
               </span>
          <span className='flex flex-col py-7 px-8  items-center text-6xl leading-relaxed'>
             {minutes < 10 ? `0${minutes}` : minutes}
               <p className='text-sm'>minutes</p>
                </span>  
          <span className='flex flex-col py-7 px-8 items-center text-6xl leading-relaxed'> 
             {seconds < 10 ? `0${seconds}` : seconds}  
               <p className='text-sm'>seconds</p>
                </span>
        </div>
      </div>
    </div>
  )
}

export default App
