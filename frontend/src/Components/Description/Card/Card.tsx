import React, { useEffect, useState } from 'react';
import Styles from './Card.module.scss';
import Button from '../../Button/Button.tsx';

const Card: React.FC = () => {
  const [film, setFilm] = useState<any>(null);
  const idFilm = localStorage.getItem('idFilm');

  useEffect(() => {
    if (idFilm) {
      fetch(`https://api.themoviedb.org/3/movie/${idFilm}?api_key=a4a7fa2a24f06525feb656146f5305a7&language=fr`)
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
      window.location.href = film.homepage; // Rediriger vers le lien
    } else {
      alert("pas de lien pour ce film"); // Afficher un message dans la console
    }
  };

  const handleClickFavoris = () => {
    // Récupération des favoris existants
    const filmsFavoris = JSON.parse(localStorage.getItem('favoris') || '[]');

    // Ajout du nouveau film au tableau
    const newFilmsFavoris = [...filmsFavoris, film.title];

    // Sauvegarde des nouveaux favoris
    localStorage.setItem('favoris', JSON.stringify(newFilmsFavoris));

    // Vérification des favoris dans la console
    const favoris = localStorage.getItem('favoris');
    console.log('Favoris:', favoris);
  };
  if (!film) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.img}>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt={film.title}
        />
      </div>
      <div className={Styles.descriptionFilm}>
        <div className={Styles.text}>
          <h1>{film.title}</h1>
          <p>{film.overview}</p>
          <p>Note {film.vote_average}</p>
        </div>
        <div className={Styles.button}>
          <Button onClick={handleClick} title="Trouver le film sur..." type='site' />
          <Button onClick={handleClickFavoris} title="Ajouter à mes favoris" type='favoris' />
        </div>
      </div>
    </div>
  );
};

export default Card;
