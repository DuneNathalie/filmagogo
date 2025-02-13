import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from '../../context/modal';

import Styles from './Modal.module.scss';

import User from "../../assets/user.png";


interface ModalUserProps {
  type: 'infos' | 'update';
  text?: string;
};

const ModalUser: React.FC<ModalUserProps> = ({ type,text }) => {
  const navigate = useNavigate();
  const { hideModal } = useModal();

  const initialName = localStorage.getItem('User');
  const [name, setName] = useState(initialName);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name) {
      console.log("Pas de stockage");
      hideModal();
      return;
    }

    if (name === "Utilisateur") {
      localStorage.setItem('User', name);
      console.log("Nom stocké");
      hideModal();
      return;
    }

    if (name !== initialName) {
      localStorage.setItem('User', name);
      console.log("Résultat stocké =>", name);
      localStorage.removeItem('favoris');
    }

    navigate('/home');
    console.log("Navigation vers home", name);
    hideModal();
  };

 
  useEffect(() => {
    if (type === 'infos') {
     const timer = setTimeout(() => {
        hideModal();
        console.log("Fermeture automatique après 3 secondes.");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [type, hideModal]);

  return (
    <div className={Styles.container}>
      {type === 'update' ? (
        <div className={Styles.containerForm}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.user}>
            <div className={Styles.img}>
              <img src={User} alt="user" />
            </div>
            <label>
              Nom d'utilisateur:
              <input
                type="text"
               // value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="Valider" className={Styles.submitButton} />
        </form>
        </div>
      ) : (
        <div className={Styles.containerMessage}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};


export default ModalUser;
