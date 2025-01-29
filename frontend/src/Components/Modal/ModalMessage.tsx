import React from 'react';
import { useModal } from '../../context/modal.tsx';

import Styles from './Modal.module.scss';

interface ModalUserProps {
    text: string;
};

const ModalUser: React.FC<ModalUserProps> = ({text}) => {

  const { hideModal } = useModal();
// si type='favoris' alors afficher ca:
  setTimeout(() => {
        hideModal();
        console.log("Delayed for 1 second.");
      }, 3000);

  return (
    <div className={Styles.containerMessage}>
        <p>{text}</p>
    </div>
  );
};

export default ModalUser;
