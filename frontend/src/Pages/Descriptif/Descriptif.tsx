import React, { useEffect, useState } from 'react';

import Card from "../../Components/Description/Card/Card.tsx";

import Styles from "./Descriptif.module.scss";

import Genre from '../../Components/Home/Genre/Genre.tsx';
import NavBar from '../../Components/Header/NavBar/NavBar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';


const Descriptif: React.FC = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [idFilm, setIdFilm] = useState<string | null>(localStorage.getItem('idFilm'));

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
