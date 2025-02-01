import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { ModalProvider } from '../src/context/modal.tsx';

import Login from './Pages/Login/Login.tsx';
import Home from './Pages/Home/Home.tsx';
import Descriptif from './Pages/Descriptif/Descriptif.tsx';
import Favoris from './Pages/Favoris/Favoris.tsx';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <ModalProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          {/** <Route path='/home' element={<Home />} />
          <Route path='/descriptif' element={<Descriptif />} />
          <Route path='/favoris' element={<Favoris />} />
        */}
        </Routes>
      </ModalProvider>
    </div>
  );
};

export default App;
