import React, {useEffect} from 'react';

import Profil from "../Components/Login/Profil/Profil";
import Change from '../Components/Login/Change/Change';
import Footer from '../Components/Footer/Footer';
import Logo from '../Components/Header/logo/Logo';

import Styles from "./Styles.module.scss";

const Login: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0,0);
}, []);


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