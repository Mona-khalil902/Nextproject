import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageWraper from'./Components/ImageWraper/ImageWraper'
import InfoWraper from'./Components/InfoWraper/InfoWraper'

function App() {

  return (
    <div id='Main'>
      <ImageWraper></ImageWraper>
      <InfoWraper></InfoWraper>
    </div>
  )
}

export default App
