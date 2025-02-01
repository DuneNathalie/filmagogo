import React from 'react';

import Styles from "./Favoris.module.scss";

import List from '../../Components/Favoris/List';
import NavBar from '../../Components/Header/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';



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