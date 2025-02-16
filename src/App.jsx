import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import Navbar from './router/Navbar'
import ISKCONPage from './about/iskcon'
import Footer from './footer/footer'
import Prabhupad from './about/prabhupad'
import IskconYnr from './about/iskconYnr'
import Home from './home/home'
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-Iskcon" element={<ISKCONPage />}></Route>
          <Route path="/founder-acharya" element={<Prabhupad />}></Route>
          <Route path="/iskcon-ynr" element={<IskconYnr />}></Route>
          <Route path="/about-Iskcon" element={<IskconYnr />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App
