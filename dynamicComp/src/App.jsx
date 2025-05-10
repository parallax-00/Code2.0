import { useState } from 'react'
import './App.css'
import AdditionInLine from './components/additionInLine'
import Greetings from './components/Greetings'
import ProductInfo from './components/ProductInfo'

function App() {


  return (
    <>
      {/* <AdditionInLine/> */}
      <Greetings />
      <ProductInfo/>
    </>
  )
}

export default App
