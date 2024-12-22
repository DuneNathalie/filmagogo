import React from 'react';

import Profil from "../../Components/Login/Profil/Profil.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

import Styles from "./Login.module.scss";
import Change from '../../Components/Login/Change/Change.tsx';

const Login: React.FC = () => {
  return (
      <div className={Styles.container}>
        <Footer/>
        <Profil />
        <Change />
      </div>
  );
};
export default Login;