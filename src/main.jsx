import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './E-commerce/Home.jsx'
import { Provider } from 'react-redux/es/exports.js'  
// import { Provider } from 'react-redux'
import { Store } from "../src/E-commerce/ReactRedux/CardSlice/Store.jsx"
// import Particlebackground from './particles/Particlebackground.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Home />
      
    </Provider>

    <Particlebackground/>
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <Particlebackground/>
//   </React.StrictMode>,
// )

