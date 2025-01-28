import React from 'react';

import Menu from '../../Components/Menu/Menu.tsx';

import Styles from "./Favoris.module.scss";

import User from "../../assets/user.png";

const Favoris:React.FC = () => {
  return (
    <div className={Styles.container}>
         <Menu img={User} title='Tes favoris'/>
      <h1>Favoris</h1>
    </div>
  );
};
export default Favoris;