import React, {useEffect} from 'react';

import List from '../Components/Favoris/List';
import NavBar from '../Components/Header/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

import Styles from "./Styles.module.scss";

const Favoris: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0,0);
}, []);


  return (
    <div className={Styles.container}>
      <NavBar />
      <List />
      <Footer />
    </div>
  );
};
export default Favoris;