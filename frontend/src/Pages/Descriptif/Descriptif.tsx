import React from 'react';

import Menu from "../../Components/Menu/Menu.tsx";
import Card from "../../Components/Description/Card/Card.tsx";

import User from "../../assets/user.png";

import Styles from "./Descriptif.module.scss";
import Contenu from '../../Components/Description/Contenu/Contenu.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const Descriptif:React.FC = () => {
  return (
    <div className={Styles.container}>
      <Menu img={User} title='Description'/>
      <Card />
      <Contenu />
      <Footer />
    </div>
  );
};
export default Descriptif;