import './App.css'
import React, {useState} from 'react';
import Routers from './fragment/route';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById('id_preloader');

  if (preloader){
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.zIndex = "-99999";

      setLoading(false);
    }, 2300)
  }

  return (
    !loading && (
      <React.Fragment>
        <BrowserRouter>
          <Routers/>  
        </BrowserRouter> 
        <Analytics/>
      </React.Fragment>
    )
  )
}

export default App
