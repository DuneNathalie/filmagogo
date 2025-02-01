import React from 'react';

import Styles from './Logo.module.scss';
import logo from '../../../assets/logo.png';


const Logo: React.FC = () => {

  return (
    <div className={Styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;