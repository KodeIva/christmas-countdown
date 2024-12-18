import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const date = new Date().getTime()
  console.log(date);
  
  const christmasDay = new Date('December 25,2024 00:00:00').getTime()
  console.log(christmasDay);
  
  const [days, setDays] = useState(0)
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  
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
  let timer = setInterval(() => {

  let daysLeft = christmasDay - date
  console.log(daysLeft);
 
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
  }, 1000)
  return() => {
    clearInterval(timer)
  }
},[])

 

  
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
