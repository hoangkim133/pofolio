import './App.css'
import React, {useState} from 'react';
import Routers from './fragment/route';
import Header from './fragment/header';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter } from 'react-router-dom'
import { Row } from 'react-bootstrap';


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
        <BrowserRouter>
          <div className='box box-conner full-height d-flex flex-column'>
            <Header/>
            <Row className="flex-grow-1">
                <Routers/>  
            </Row>
          </div>
        </BrowserRouter> 
        <Analytics/>
      </React.Fragment>
    )
  )
}

export default App
