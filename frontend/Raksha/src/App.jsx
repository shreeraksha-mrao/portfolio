import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/navbar'
import LandingPage from './components/landing'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar />
      <LandingPage />
    </>
  )
}

export default App
