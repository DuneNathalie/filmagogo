import React from 'react';

import Styles from './Profil.module.scss';

import User from './../User/User.tsx';
import UserOne from "./../../../assets/user1.png";
import UserTwo from "./../../../assets/user2.png"

const Profil: React.FC = () => {
    return (
        <div className={Styles.container}>
            <h1>Qui est-ce?</h1>
            <div className={Styles.user}>
                <User user={UserOne} name="User One" />
                <User user={UserTwo} name="User Two" />
            </div>
        </div>
    );
}
export default Profil;