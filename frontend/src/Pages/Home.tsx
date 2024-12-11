import React, { useEffect, useState } from 'react';

const Home:React.FC = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/films')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Erreur:', error));
  }, []);
  return (
    <div>
      <h1>Liste de films : </h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            {film.title} - Réalisé par {film.director}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;