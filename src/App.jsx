import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Bottles from './Component/Bottles/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
    </>
  )
}

export default App
