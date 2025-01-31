import React, { useEffect, useState } from 'react';

import Genre from '../../Components/Home/Genre/Genre.tsx';
import NavBar from './../../Components/Header/NavBar/NavBar.tsx';

import Styles from "./Home.module.scss";

import Footer from '../../Components/Footer/Footer.tsx';

const Home: React.FC = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [actionFilms, setActionFilms] = useState([]);
  const [comedyFilms, setComedyFilms] = useState([]);
  const [mangaFilms, setMangaFilms] = useState([]);
  const [westernFilms, setWesternFilms] = useState([]);
  const [horrorFilms, setHorrorFilms] = useState([]);


  const fetchFilmsByGenre = (genreId: number, setFilms: React.Dispatch<React.SetStateAction<any[]>>) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a4a7fa2a24f06525feb656146f5305a7&with_genres=${genreId}`)
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
      `https://api.themoviedb.org/3/movie/popular?api_key=a4a7fa2a24f06525feb656146f5305a7`
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
