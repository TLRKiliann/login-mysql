import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import LoginTester from './components/LoginTester'
import Home from './components/Home'
import Login from './components/Login'
import Subscribe from './components/Subscribe'
import LoginDashboard from './components/LoginDashboard'
import Succeed from './components/Succeed'

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
        <Route path='/succeed' element={<Succeed />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/logindashboard' element={<LoginDashboard />} />
      </Routes>
    </div>
  )
}

export default App
