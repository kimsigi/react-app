import { useState } from 'react'
import '@/App.css'
import Day01App from '@/Day01/Day01App'
import Day02App from '@/Day02/Day02App'
import Day03App from './Day03/Day03App'

function App() {
  return (
    <>
      <Day03App />
      <hr /><hr />
      <Day02App />
      <hr /><hr />
      <Day01App />
    </>
  )
}

export default App
