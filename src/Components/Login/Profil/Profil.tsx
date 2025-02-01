import React from 'react';

import Styles from './Profil.module.scss';

import User from './../User/User';
import UserOne from "./../../../assets/user.png";

const Profil: React.FC = () => {
    const name = localStorage.getItem('User');

    console.log("verifie si j'ai bien les deux", name);
    return (
        <div className={Styles.container}>
            <div className={Styles.profil}>
            <h2>Qui est-ce?</h2>
            <div className={Styles.user}>
                <User user={UserOne} name={name} />
            </div>
            </div>
        </div>
    );
}
export default Profil;