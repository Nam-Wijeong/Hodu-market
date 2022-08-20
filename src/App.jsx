import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
    text-decoration : none;
    color : inherit;
    }

  button{
    cursor : pointer;
    margin: 0;
    padding: 0;
    border : none;
    background-color: transparent;
  }

  * {
    box-sizing: border-box;
  }
`
function App() {
  const [loading, setLoading] = useState(true);
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