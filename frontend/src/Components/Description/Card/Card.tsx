import React, { useEffect, useState } from 'react';
import Styles from './Card.module.scss';
import Button from '../../Button/Button.tsx';

interface CardProps {
  idFilm: string | null;
}

const Card: React.FC<CardProps> = ({ idFilm }) => {
  const [film, setFilm] = useState<any>(null);

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
    alert('Le film a été ajouté à vos favoris');
  };

  if (!film) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.img}>
        <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt={film.title} />
      </div>
      <div className={Styles.descriptionFilm}>
        <div>
          <h1>{film.title}</h1>
          <p>{film.overview}</p>
          <p>Note {film.vote_average}</p>
        </div>
        <div className={Styles.button}>
          <Button onClick={handleClick} text="Trouver le film sur..." type='site' />
          <Button onClick={handleClickFavoris} text="Ajouter à mes favoris" type='favoris' />
        </div>
      </div>
    </div>
  );
};

export default Card;
