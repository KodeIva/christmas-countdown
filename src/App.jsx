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
      <h4 className='text-white text-xl leading-relaxed'>How many days until</h4>
      <h1 className='text-white text-5xl leading-relaxed'>Christmas Day</h1>
      <p className='text-white text-lg leading-relaxed'>Wednesday, 25 December 2024</p>
     </div>
    
      <div>
        <h2>{days}Days {hour < 10 ? `0${hour}` : hour} Hours {minutes < 10 ? `0${minutes}` : minutes}Mins {seconds < 10 ? `0${seconds}` : seconds} Secons </h2>
        <p>{}</p>
      </div>
    </div>
  )
}

export default App
