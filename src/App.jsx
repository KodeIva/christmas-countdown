import { useState } from 'react'
import './App.css'



function App() {
  const [date, setDate] = useState(new Date().getTime());
  console.log(date);
  
  const [christmasDay, setChtistmasDay] = useState(new Date('December 25,2024').getTime())
  console.log(christmasDay);
  
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

 let daysLeft = christmasDay - date
  console.log(daysLeft);
 let difference = parseInt(daysLeft)
 console.log(difference);
 
  let daysToChLeft = Math.floor(daysLeft / (1000 * 60 * 60 * 24))
  console.log(daysToChLeft);
  

  
  return (
    <>
    
      <p>
   {currentDay}
      </p>
      <p>{christmasDay}</p>

      <div>
        <h2>{daysToChLeft} Days Until Christmas</h2>
        <p>{}</p>
      </div>
    </>
  )
}

export default App
