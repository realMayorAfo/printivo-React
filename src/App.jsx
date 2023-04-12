import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Body from './component/Bodymain'
import Contentbody from './component/Contentbody'
import Customer from './component/Customer'
import Hero from './component/Hero'
import Work from './component/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Body></Body>
    <Contentbody></Contentbody>
    <Customer></Customer>
    <Hero></Hero>
    <Work/>
    
    </>
  )
}

export default App
