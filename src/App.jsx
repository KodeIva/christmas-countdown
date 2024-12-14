import { useState } from 'react'

import './App.css'



function App() {
  const [date, setDate] = useState(new Date());
  const [christmasDay, setChtistmasDay] = useState('25 December 2024')
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
 
  console.log(date);
  let day = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  let currentDay = `${day}  ${month}  ${year}`

  
  let daysLeft = 25 - day
  console.log(daysLeft);
  
 

  return (
    <>
    
      <p>
        {currentDay}
      </p>
      <p>{christmasDay}</p>

      <div>
        <h2>Days Until Christmas</h2>
        <p>{daysLeft}</p>
      </div>
    </>
  )
}

export default App
