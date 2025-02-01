import React from 'react';

import Styles from "./Favoris.module.scss";

import List from '../../Components/Favoris/List.tsx';
import NavBar from '../../Components/Header/NavBar/NavBar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';



const Favoris: React.FC = () => {
  return (
    <div className={Styles.container}>
      <NavBar />
      <List />
      <Footer />
    </div>
  );
};
export default Favoris;