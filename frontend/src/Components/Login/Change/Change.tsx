import React from 'react';
import { useModal } from '../../../context/modal.tsx';

import Styles from './Change.module.scss';
import ModalContent from '../../Modal/Modal.tsx';

const Change: React.FC = () => {
  const { showModal } = useModal();

  const handleClick = () => {
    showModal(<ModalContent />);
  };

  return (
    <div className={Styles.container}>
      <p>Ajouter ou modifier utilisateur</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Change;
