import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration : none;
    color : inherit;
    }

  button{
    cursor : pointer;
    border : none;
    background-color: transparent;
  }

  * {
    box-sizing: border-box;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/join' element={<Join/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;