import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { ModalProvider } from '../src/context/modal';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Descriptif from './Pages/Descriptif';
import Favoris from './Pages/Favoris';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <ModalProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/descriptif' element={<Descriptif />} />
          <Route path='/favoris' element={<Favoris />} />
        </Routes>
      </ModalProvider>
    </div>
  );
};

export default App;
