import React from 'react';
import Styles from './Header.module.scss';
import logo from '../../assets/logo.png';


const Header: React.FC = () => {

  return (
    <div className={Styles.container}>
      <img src={logo} alt="logo" />
      <div className={Styles.menu}>
      </div>
    </div>
  );
};

export default Header;
