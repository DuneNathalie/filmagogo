import React, { useState } from 'react';
import { useModal } from '../../../src/context/modal.tsx';

import User1 from "../../assets/user1.png";

import Styles from './Modal.module.scss';

const Modal: React.FC = () => {
  const { hideModal } = useModal();

  const initialName = localStorage.getItem('User');
  const [name, setName] = useState(initialName);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name !== initialName) {
      localStorage.setItem('User', name);
      const result = localStorage.getItem('User');
      console.log(result);
    }
    alert('Les noms ont été mis à jour !');
    hideModal(); // Fermer la modal
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.user}>
          <img src={User1} alt="user" />
          <label>
            {initialName}:
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

export default Modal;
