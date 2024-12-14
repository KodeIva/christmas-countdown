import { useState } from 'react'

import './App.css'

function App() {
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
 
  let date = new Date()
  console.log(date);
  let day = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  let currentDay = `${day}  ${month}  ${year}`
  return (
    <>
    
      <p>
        {currentDay}
      </p>
    </>
  )
}

export default App
