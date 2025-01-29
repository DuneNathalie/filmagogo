import React from 'react';

import Styles from "./Menu.module.scss";
import NavBar from '../NavBar/NavBar.tsx';

interface MenuProps {
    img: string;
    title: string;
    style?: string
}

const Menu: React.FC<MenuProps> = ({ img, title }) => {
 
    const name = localStorage.getItem('User');
    title = name;
    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <img src={img} />
                <p>{title}</p>
            </div>
            <div className={Styles.Links}>
                <NavBar/>
            </div>
        </div>
    );
};
export default Menu;