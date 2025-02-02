import React from 'react';

import { useModal } from '../../../context/modal';
import ModalContent from '../../Modal/Modal';

import Styles from './Change.module.scss';

const Change: React.FC = () => {
  const { showModal } = useModal();

  const handleClick = () => {
    showModal(<ModalContent type="update"/>);
  };

  return (
    <div className={Styles.container}>
      <p>Ajouter ou modifier utilisateur</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Change;
