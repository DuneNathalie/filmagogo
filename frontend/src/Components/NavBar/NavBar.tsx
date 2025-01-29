import React, { useState } from 'react';

import Styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {

    return (
        <div className={Styles.container}>
            <a href="/home">Films</a>
            <a href="/favoris">Favoris</a>
            <a href="/">Quitter</a>
        </div>
    );
};
export default NavBar;