import React from 'react';

import Styles from "./User.module.scss";

interface MenuProps {
    img: string;
    title?: string;
    style?: string
}

const User: React.FC<MenuProps> = ({ img, title }) => {
    const name = localStorage.getItem('User');
    title = name;
    return (
        <div className={Styles.container}>
            <div className={Styles.user}>
                <img src={img} />
                <p>{title}</p>
            </div>  
        </div>
    );
};
export default User;