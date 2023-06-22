import './App.css'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false)
  return (
    <>
      <Nav sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      {!sidebarActive ? (
        <>
          <Home />

          <About />

          <Gallery />
          <Contact />

          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  )
}
export default App
