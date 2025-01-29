import React from 'react';

import Menu from '../../Components/Menu/Menu.tsx';

import Styles from "./Favoris.module.scss";

import User from "../../assets/user.png";
import List from '../../Components/Favoris/List.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const Favoris:React.FC = () => {
  return (
    <div className={Styles.container}>
         <Menu img={User} title='Tes favoris'/>
         <List />
         <Footer />
    </div>
  );
};
export default Favoris;