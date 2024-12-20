import React from 'react';

import Profil from "../../Components/Login/Profil/Profil.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

import Styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
      <div className={Styles.container}>
        <Footer menu={false}/>
        <Profil />
      </div>
  );
};
export default Login;