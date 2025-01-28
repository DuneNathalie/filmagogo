import React, { useEffect, useState } from 'react';

import Styles from './Contenu.module.scss';
import { Card } from 'react-bootstrap';
import Genre from '../../Home/Genre/Genre.tsx';

const Contenu: React.FC = () => {
    const [popularFilms, setPopularFilms] = useState([]);

 useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a4a7fa2a24f06525feb656146f5305a7"
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularFilms(data.results);
      })
      .catch((error) => console.error("Erreur:", error));
  }, []);



    return (
        <div className={Styles.container}>
            <Card  />
            <Genre data={popularFilms} theme="A voir aussi"/>
        </div>
    )
};
export default Contenu;