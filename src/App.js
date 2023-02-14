import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/Not Found/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
