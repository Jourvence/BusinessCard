import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TopImg from './components/TopImg'
import SingleCard from './components/SingleCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SingleCard/>
      
    </>
  )
}

export default App
