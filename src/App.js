import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/search" Component={Search}>
          </Route>
          <Route path="/" Component={Home}>
          </Route>
        </Routes>
      </Router>
      <Footer/>
      </div>
  )
}

export default App