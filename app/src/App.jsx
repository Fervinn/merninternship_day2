import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Library from './components/Library'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Three from './components/Three'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Sign Up</h1> */}
      {/* <Login/> */}
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/library" element={<Library />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/three" element={<Three />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product" element={<Product />} />




      </Routes>
      </>
  )
}

export default App
