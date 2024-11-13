import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TopImg from './components/TopImg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopImg/>
    </>
  )
}

export default App
