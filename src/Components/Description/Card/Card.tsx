import React, { useEffect, useState } from 'react';
import Styles from './Card.module.scss';
import Button from '../../Button/Button';
import ModalContent from '../../Modal/Modal';

import { useModal } from '../../../context/modal';

interface CardProps {
  idFilm: string | null;
}

const Card: React.FC<CardProps> = ({ idFilm }) => {

  const apiKey = process.env.REACT_APP_API_KEY_TMDB;
  if (!apiKey) {
    console.error("Clé API non définie dans les variables d'environnement !");
  } else {
    console.log("Clé API chargée :", apiKey);
  }
  
  const [film, setFilm] = useState<any>(null);
  
  const { showModal } = useModal();
  
  useEffect(() => {
    if (idFilm) {
      fetch(`https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}&language=fr`)
        .then((response) => response.json())
        .then((data) => {
          setFilm(data);
        })
        .catch((error) => console.error("Erreur:", error));
    } else {
      console.log('Aucun ID de film trouvé');
    }
  }, [idFilm]); 

  const handleClick = () => {
    if (film?.homepage) {
      window.location.href = film.homepage;
    } else {
      alert("pas de lien pour ce film");
    }
  };

  const handleClickFavoris = () => {
    const filmsFavoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    const newFilmsFavoris = [...filmsFavoris, film.id];
    localStorage.setItem('favoris', JSON.stringify(newFilmsFavoris));

    console.log('Favoris:', localStorage.getItem('favoris'));
    showModal(<ModalContent text='Ton film a bien été ajouté à tes favoris' type='infos' />);
  };

  if (!film) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.containerDescription}>
        <div className={Styles.img}>
          <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.title} />
        </div>
        <div className={Styles.descriptionFilm}>
          <div className={Styles.text}>
            <h2>{film.title}</h2>
            <p>{film.overview}</p>
            <p>Note {film.vote_average}</p>
          </div>
          <div className={Styles.button}>
            <Button onClick={handleClick} text="Trouver le ici" type='site' />
            <Button onClick={handleClickFavoris} text="Favoris +" type='favoris' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
