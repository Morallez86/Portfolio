import React from 'react'
import Home from './pages/Home'
import { HashRouter } from 'react-router-dom'

export default function App(){
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  )
}
