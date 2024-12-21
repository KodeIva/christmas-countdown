import { useEffect, useState } from 'react'
import './App.css'
import Snowfall from 'react-snowfall'
import { PiCalendarDotsFill } from "react-icons/pi";
import winter from './assets/christmas-tree-1.jpg'

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
    <div  className='main border-[5px] border-red-800 flex flex-col h-screen w-screen bg-cover bg-no-repeat ' style={{ height: '100vh', width: '100%', position: 'relative' ,backgroundImage: `url(${winter})`}} >
        <Snowfall snowflakeCount={800} />
     <div className='cr-day m-10  '>
      <p className='text-white text-lg leading-snug font-light'>How many days until</p>
      <h1 className='text-white text-6xl leading-snug font-semibold'>Christmas Day</h1>
      <span className='flex items-center text-white text-lg leading-snug font-light'>
        <PiCalendarDotsFill  />
        <p>Wednesday, 25 December 2024</p>
      </span>
     </div>
    
      <div className='date-time  flex flex-col items-center text-white mx-10 mt-50  h-[auto]  w-[300px]'>
        <div className='date flex flex-col items-center'>
          <h2 className='text-[140px] font-bold'>{days}</h2>
          <p className='text-xl'>days</p>
        </div>
        <div className='time border-[5px] border-red-400 flex w-[300px] h-auto'>
          <span className='flex flex-col py-7 px-8 items-center text-6xl leading-relaxed'> 
             {hour < 10 ? `0${hour}` : hour} 
               <p className='text-sm'>hours</p>  
               </span>
          <span className='flex flex-col py-7  px-8  items-center text-6xl leading-relaxed'>
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
