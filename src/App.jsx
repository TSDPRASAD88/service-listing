import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "../data.json"
import ServiceCard from './components/ServiceCard'

function App() {
  const [serviceData, setServiceData] = useState(data)

  return (
    <>
     {
       serviceData.map((service)=>(
        <ServiceCard data={service}/>
       ))
     }
    </>
  )
}

export default App
