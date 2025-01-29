import React from 'react';

import { useNavigate } from 'react-router-dom';

import Styles from "./User.module.scss";
import { useModal } from '../../../context/modal.tsx';
import ModalMessage from '../../Modal/ModalMessage.tsx';

interface UserProps {
    user: string;
    name: string;
}

const User: React.FC<UserProps> = ({ user, name }) => {

    const { showModal } = useModal();

    const navigate = useNavigate();
    const handleClick = () => {
        if (name === "Utilisateur") {
            showModal(<ModalMessage text="Merci d'ajouter un utilisateur pour vous connecter"/>);
           // alert("Ajouter utilisateur");
        } else{
            navigate('/home');
            localStorage.setItem('User', name);
        }
    };

    console.log("name => ", name);

    return (
        <div className={Styles.container}>
            <img src={user} alt="user" onClick={() => handleClick()} />
            <p>{name}</p>
        </div>
    );
}
export default User;