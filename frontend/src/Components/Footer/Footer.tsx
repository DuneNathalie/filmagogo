import React from 'react';
import Styles from './Footer.module.scss';
import logo from '../../assets/logo.png';


const Footer: React.FC = () => {

  return (
    <div className={Styles.container}>
      <img src={logo} alt="logo" />
      <div className={Styles.menu}>
      </div>
    </div>
  );
};

export default Footer;
