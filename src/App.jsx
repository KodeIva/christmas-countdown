import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const date = new Date().getTime()
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

  let daysLeft = christmasDay - date
  if(daysLeft > 0) {
  let days = Math.floor(daysLeft / (24*60*60*1000))

  let hour = Math.floor(daysLeft/(1000*60*60) % 24)
  console.log(hour);
  
  let mins = Math.floor((daysLeft % (60*60*1000))/(60*1000))
  console.log(mins);

  let sec = Math.floor((daysLeft % (60*1000)) / 1000)
  console.log(sec);
  
  setDays(days)
  setHour(hour)
  setMinutes(mins)
  setSeconds(sec)
}else{
  setIsChristmas(true)
}
  }, 1000)
  return() => {
    clearInterval(timer)
  }
},[christmasDay])


  
  return (
    <>
    
      <p>
   {currentDay}
      </p>
      <p>{christmasDay}</p>

      <div>
        <h2>{days}Days {days} Until Christmas {hour} Hours {minutes}Mins {seconds} Secons </h2>
        <p>{}</p>
      </div>
    </>
  )
}

export default App
