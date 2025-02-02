import React, { useEffect, useState } from 'react';

import Genre from '../Components/Home/Genre/Genre';
import NavBar from '../Components/Header/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

import Styles from "./Styles.module.scss";

const Home: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0,0);
}, []);


  const [animationFilms, setAnimationFilms] = useState<any[]>([]);
  const [romanceFilms, setRomanceFilms] = useState<any[]>([]);
  const [comedyFilms, setComedyFilms] = useState<any[]>([]);
  const [histoireFilms, setHistoireFilms] = useState<any[]>([]);
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
    fetchFilmsByGenre(16, setAnimationFilms);
    fetchFilmsByGenre(10749, setRomanceFilms);
    fetchFilmsByGenre(35, setComedyFilms);
    fetchFilmsByGenre(36, setHistoireFilms);
    fetchFilmsByGenre(80, setWesternFilms);
    fetchFilmsByGenre(27, setHorrorFilms);
  }, []);

 {/**  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularFilms(data.results);
      })
      .catch((error) => console.error("Erreur:", error));
  }, []); */}

  return (
    <div className={Styles.container}>
      <NavBar/>
      <Genre data={comedyFilms} theme="Comedy"/>
      <Genre data={animationFilms} theme="Animation"/>
      <Genre data={horrorFilms} theme="Horror"/>
      <Genre data={westernFilms} theme="Western"/>
      <Genre data={romanceFilms} theme="Romance"/>
      <Genre data={histoireFilms} theme="Histoire"/>
      <Footer/>
    </div>
  );
};

export default Home;
