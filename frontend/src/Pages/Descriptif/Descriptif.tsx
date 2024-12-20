import React from 'react';

import Menu from "../../Components/Menu/Menu.tsx";

import User from "../../assets/user1.png";

import Styles from "./Descriptif.module.scss";

const Descriptif:React.FC = () => {
  return (
    <div className={Styles.container}>
      <Menu img={User} title='Description'/>
    </div>
  );
};
export default Descriptif;