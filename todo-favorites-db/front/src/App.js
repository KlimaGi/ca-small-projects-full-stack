import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from './context/MainContext';
import IndexPage from './pages/index-page';
import MainBox from './components/main-box';
import './styles.css';


function App() {

  return (
    <>

      <div className='main'>
        <MainContext.Provider value={{}}>

          <MainBox />
        </MainContext.Provider>
      </div>
    </>
  );
}

export default App;
