import React from 'react';

import { useNavigate } from 'react-router-dom';

import Styles from "./User.module.scss";

interface UserProps {
    user: string;
    name: string;
}

const User: React.FC<UserProps> = ({ user, name }) => {
    const navigate = useNavigate();
   
    return (
        <div className={Styles.container}>
            <img src={user} alt="user" onClick={()=>navigate('/home')}/>
            <p>{name}</p>
        </div>
    );
}
export default User;