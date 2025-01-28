import React, { useEffect, useState } from "react";

import Genre from "../../Components/Home/Genre/Genre.tsx";
import Menu from "../../Components/Menu/Menu.tsx";

import Styles from "./Home.module.scss";

import User from "../../assets/user.png";
import Footer from "../../Components/Footer/Footer.tsx";



const Home: React.FC = () => {
const [films, setFilms] = useState<[]>([]);

useEffect(() => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a4a7fa2a24f06525feb656146f5305a7"
  )
    .then((response) => response.json())
    .then((data) => {
      setFilms(data.results);
    })
    .catch((error) => console.error("Erreur:", error));
}, []);

  return (
    <div className={Styles.container}>
      <Menu img={User} title="Pour Toto" />
      <Genre data={films} theme="Populaire"/>
      <Genre data={films} theme="Comedie"/>
      <Genre data={films} theme="Thriller"/>
      <Footer />
    </div>
  );
};

export default Home;
