import { useState } from 'react'
import '@/App.css'
import Day01App from '@/Day01/Day01App'
import Day02App from '@/Day02/Day02App'
import Day03App from './Day03/Day03App'
import Day04App from './Day04/Day04App'

function App() {
  return (
    <>
      <Day04App />
      <hr /><hr />
      <Day03App />
      <hr /><hr />
      <Day02App />
      <hr /><hr />
      <Day01App />
    </>
  )
}

export default App
