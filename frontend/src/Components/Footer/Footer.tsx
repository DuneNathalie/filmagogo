import React from 'react';
import Styles from './Footer.module.scss';
import logo from '../../assets/logo.png';

interface FooterProps {
  menu: boolean;
}

const Footer: React.FC<FooterProps> = ({menu}) => {

  return (
    <div className={Styles.container}>
      <img src={logo} alt="logo" />
      <div className={Styles.menu}>
      {menu && <p>Menu</p>}
      </div>
    </div>
  );
};

export default Footer;
