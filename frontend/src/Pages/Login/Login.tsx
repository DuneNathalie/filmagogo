import React from 'react';

import Profil from "../../Components/Login/Profil/Profil.tsx";

import Styles from "./Login.module.scss";
import Change from '../../Components/Login/Change/Change.tsx';


const Login: React.FC = () => {

  return (
      <div className={Styles.container}>
        <Profil />
        <Change />
      </div>
  );
};
export default Login;