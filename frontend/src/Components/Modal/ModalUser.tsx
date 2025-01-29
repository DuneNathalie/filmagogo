import React, { useState } from 'react';
import { useModal } from '../../context/modal.tsx';

import { useNavigate } from 'react-router-dom';
import User from "../../assets/user.png";

import Styles from './Modal.module.scss';

const ModalUser: React.FC = () => {
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

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.user}>
          <div className={Styles.img}>
            <img src={User} alt="user" />
          </div>
          <label>
           {/*{initialName} :*/} Nom d'utilisateur:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Valider" className={Styles.submitButton} />
      </form>
    </div>
  );
};

export default ModalUser;
