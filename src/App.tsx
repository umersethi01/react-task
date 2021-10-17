import { useState, useEffect } from 'react'

import Dashboard from './components/Dashboard/Dashboard'

import './App.css'

function App() {
  const [currentState, setCurrentState] = useState()

  return (
    <div className='App'>
      <Dashboard />
    </div>
  )
}

export default App
