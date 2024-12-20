import React from 'react';

import Styles from "./Menu.module.scss";

interface MenuProps {
    img: string;
    title:string;
}

const Menu: React.FC<MenuProps> = ({img, title}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
            <img src={img}/>
            <p>{title}</p>
            </div>
            <div className={Styles.Links}>
                <a href="/home">Home</a>
                <a href="/descriptif">Film</a>
                <a href="/favoris">Favoris</a>
                <a href="/">Quitter</a>
            </div>
        </div>
    );
};
export default Menu;