import React, { useEffect, useState } from 'react';

import Card from "../../Components/Description/Card/Card.tsx";

import Styles from "./Descriptif.module.scss";

import Genre from '../../Components/Home/Genre/Genre.tsx';
import NavBar from '../../Components/Header/NavBar/NavBar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const Descriptif: React.FC = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [idFilm, setIdFilm] = useState<string | null>(localStorage.getItem('idFilm'));

  const apiKey = process.env.REACT_APP_API_KEY_TMDB;
  if (!apiKey) {
    console.error("Clé API non définie dans les variables d'environnement !");
  } else {
    console.log("Clé API chargée :", apiKey);
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularFilms(data.results);
      })
      .catch((error) => console.error("Erreur:", error));
  }, []);

   // Écoute le changement de localStorage
   useEffect(() => {
    const handleStorageChange = () => {
      setIdFilm(localStorage.getItem('idFilm'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className={Styles.container}>
      <NavBar />
      <Card idFilm={idFilm}/>
      <Genre data={popularFilms} theme="A voir aussi" />
      <Footer />
    </div>
  );
};

export default Descriptif;
