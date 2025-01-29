import React from 'react';

import Profil from "../../Components/Login/Profil/Profil.tsx";
import Header from "../../Components/Header/Header.tsx";

import Styles from "./Login.module.scss";
import Change from '../../Components/Login/Change/Change.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const Login: React.FC = () => {

  return (
      <div className={Styles.container}>
        <Header/>
        <Profil />
        <Change />
        <Footer/>
      </div>
  );
};
export default Login;