import { useEffect, useState } from 'react'
import './App.css'
import Snowfall from 'react-snowfall'

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
    <div style={{ height: 2000, width: 2000, position: 'relative' }}>
        <Snowfall snowflakeCount={800} />
     <div className='cr-day m-10 '>
      <h4 className='text-white text-xl leading-relaxed font-semibold'>How many days until</h4>
      <h1 className='text-white text-6xl leading-relaxed font-semibold'>Christmas Day</h1>
      <p className='text-white text-lg leading-relaxed font-semibold'>Wednesday, 25 December 2024</p>
     </div>
    
      <div className='flex flex-col items-center text-white mx-10 mt-80 bg-slate-900 w-64'>
        <div>
          <h2 className='text-8xl'>{days}</h2>
          <h2>Days</h2>
        </div>
        <div>
          <span> {hour < 10 ? `0${hour}` : hour}  </span><p>Hours</p> 
          <span>{minutes < 10 ? `0${minutes}` : minutes} </span>  <p>Mins</p>
          <span> {seconds < 10 ? `0${seconds}` : seconds}   </span><p>Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default App
