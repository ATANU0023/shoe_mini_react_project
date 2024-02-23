import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
     <Nav/>
     <Hero/>
     </div>
    </>
  )
}

export default App
