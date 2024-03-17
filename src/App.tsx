import './App.css'
import React, {useState} from 'react';
import Routers from './fragment/route';
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById('id_preloader');

  if (preloader){
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.zIndex = "-99999";

      setLoading(false);
    }, 2500)
  }

  return (
    !loading && (
      <React.Fragment>
        <Routers/>   
        <Analytics/>
      </React.Fragment>
    )
  )
}

export default App
