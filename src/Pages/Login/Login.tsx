import React from 'react';

import Profil from "../../Components/Login/Profil/Profil";

import Styles from "./Login.module.scss";
import Change from '../../Components/Login/Change/Change';
import Footer from '../../Components/Footer/Footer';
import Logo from '../../Components/Header/logo/Logo';


const Login: React.FC = () => {

  if (localStorage.getItem('User') === null) {
    localStorage.setItem('User', 'Utilisateur');
}

console.log(localStorage.getItem('User'));

  return (
      <div className={Styles.container}>
        <Logo />
        <Profil />
        <Change />
        <Footer />
      </div>
  );
};
export default Login;