import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import {Home} from './components/Home';


const app = ReactDOM.createRoot(document.getElementById('root'))

let counter = 0

setInterval(() => {

  const digitSix = Math.floor(counter / 100000);
  const digitFive = Math.floor(counter / 10000);
  const digitFour = Math.floor(counter / 1000);
  const digitThree = Math.floor(counter / 100);
  const digitTwo = Math.floor(counter / 10);
  const digitOne= Math.floor(counter / 1);
  
  counter++;

  

  app.render(
    <React.StrictMode>
      <Home digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} digitFive={digitFive} digitSix={digitSix}/>
     
    </React.StrictMode>,
  )
}, 1000)
