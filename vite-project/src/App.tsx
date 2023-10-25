import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import LoginTester from './components/LoginTester'
import Home from './components/Home'
import Login from './components/Login'
import Tester from './components/Tester'
import Subscribe from './components/Subscribe'

/*
type AttrProps = {
  exact: true; 
  path: string; 
  element: Element;
}
*/

const App: React.FC = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tester' element={<Tester />} />
        <Route path='/subscribe' element={<Subscribe />} />
      </Routes>
    </div>
  )
}

export default App
