import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Profile/Welcome'
import WhatBrings from './pages/Profile/WhatBrings'
import EmailVerify from './pages/EmailVerify'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/whatBrings" element={<WhatBrings />} />
          <Route path="/emailVerify" element={<EmailVerify />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
