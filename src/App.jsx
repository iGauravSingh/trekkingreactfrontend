import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Text from './components/Text'
import './App.css'
import Boxes from './components/Boxes'
import Gallery from './components/Gallery'
import Stays from './components/Stays'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
        <Text />
        <Boxes />
        <Gallery />
        <Stays />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
