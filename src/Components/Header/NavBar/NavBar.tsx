import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Styles from "./NavBar.module.scss";

import User from '../../Header/User/User';

import User1 from '../../../assets/user.png';

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen);

    return (
        <nav className={Styles.container}>
            <User img={User1} title={''} />
            <div className={Styles.menu} onClick={() => setMenuOpen(prev => !prev)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? `${Styles.open}` : ''}>
                <li>
                    <NavLink to='/home'>Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to='/favoris'>Favoris</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Quitter</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;
