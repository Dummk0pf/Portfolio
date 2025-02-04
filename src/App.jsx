import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Contact, Projects } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </Router>
    </main>
  )
}

export default App;


