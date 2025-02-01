import React, { useEffect, useState } from 'react';

import Genre from '../../Components/Home/Genre/Genre';
import NavBar from './../../Components/Header/NavBar/NavBar';

import Styles from "./Home.module.scss";

import Footer from '../../Components/Footer/Footer';

const Home: React.FC = () => {
  const [popularFilms, setPopularFilms] = useState<any[]>([]);
  const [actionFilms, setActionFilms] = useState<any[]>([]);
  const [comedyFilms, setComedyFilms] = useState<any[]>([]);
  const [mangaFilms, setMangaFilms] = useState<any[]>([]);
  const [westernFilms, setWesternFilms] = useState<any[]>([]);
  const [horrorFilms, setHorrorFilms] = useState<any[]>([]);

  const apiKey = process.env.REACT_APP_API_KEY_TMDB;
  if (!apiKey) {
    console.error("Clé API non définie dans les variables d'environnement !");
  } else {
    console.log("Clé API chargée :", apiKey);
  }

  const fetchFilmsByGenre = (genreId: number, setFilms: React.Dispatch<React.SetStateAction<any[]>>) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
      .then(response => response.json())
      .then(data => setFilms(data.results))
      .catch(error => console.error('Erreur:', error));
  };

  useEffect(() => {
    // Appeler la fonction pour chaque genre
    fetchFilmsByGenre(28, setActionFilms);
    fetchFilmsByGenre(35, setComedyFilms);
    fetchFilmsByGenre(16, setMangaFilms);
    fetchFilmsByGenre(80, setWesternFilms);
    fetchFilmsByGenre(27, setHorrorFilms);
  }, []);

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

  return (
    <div className={Styles.container}>
      <NavBar/>
      <Genre data={popularFilms} theme="Populaire"/>
      <Genre data={mangaFilms} theme="Manga"/>
      <Genre data={comedyFilms} theme="Comedy"/>
      <Genre data={horrorFilms} theme="Horror"/>
      <Genre data={westernFilms} theme="Western"/>
      <Genre data={actionFilms} theme="Action"/>
      <Footer/>
    </div>
  );
};

export default Home;
