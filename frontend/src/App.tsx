import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login.tsx';
import Home from './Pages/Home.tsx';
import Descriptif from './Pages/Descriptif.tsx';
import Favoris from './Pages/Favoris.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
          <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/descriptif' element={<Descriptif />} />
                <Route path='/favoris' element={<Favoris />} />
              {/** <Route path='/Contact' element={<Contact />} />*/}  
            </Routes>
    </div>
  );
}

export default App;
