import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './E-commerce/Home.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es/exports.js'
// import Navbars from './Dummy.jsx'
import { Store } from "../src/E-commerce/ReactRedux/CardSlice/Store.jsx"
// import Header from './Demoproject/Header.jsx'
// import Home_1 from './Demoproject/Home_1.jsx'
// import { NavBar } from './Demoproject/NavBar.jsx'
// import Hero from './Demoproject/Hero.jsx'
// import Motion from './Demoproject/Motion.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Home />
      
    </Provider>
  </React.StrictMode>,
)

// {/* <NavBar/> */}
// {/* <Motion/> */}
// {/* <Home_1/> */}
// {/* <Hero/> */}
// {/* <Navbars/> */}