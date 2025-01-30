import React from 'react';

import Styles from "./Favoris.module.scss";

import List from '../../Components/Favoris/List.tsx';


const Favoris:React.FC = () => {
  return (
    <div className={Styles.container}>
         <List />
    </div>
  );
};
export default Favoris;