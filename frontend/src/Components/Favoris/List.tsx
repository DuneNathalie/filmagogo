import React, { useEffect, useState } from 'react';

import {useTypewriter, Cursor} from 'react-simple-typewriter';

import Styles from './List.module.scss';

import { MdDeleteForever } from "react-icons/md";

import  vide  from "../../../src/assets/vide.png";

const List: React.FC = () => {
    const [typeEffect]=useTypewriter({
        words:["Tu n'as encore rien ajouté à tes favoris!"],
        loop:1,
        typeSpeed: 40,
    });

    const [favoris, setFavoris] = useState<any[]>([]);

    useEffect(() => {
        const idfavoris: number[] = JSON.parse(localStorage.getItem('favoris') || '[]');

        if (idfavoris.length > 0) {
            Promise.all(
                idfavoris.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a4a7fa2a24f06525feb656146f5305a7&language=fr`)
                        .then((response) => response.json())
                )
            )
                .then((movies) => setFavoris(movies))
                .catch((error) => console.error("Erreur:", error));
        } else {
            console.log('Aucun ID de film trouvé');
        }
    }, []);

    const removeFromFavorites = (id: number) => {
        const newFavoris = favoris.filter(film => film.id !== id);
        setFavoris(newFavoris);

        // Mettre à jour le localStorage avec la nouvelle liste des ID
        const updatedIds = newFavoris.map(film => film.id);
        localStorage.setItem('favoris', JSON.stringify(updatedIds));
    };

    return (
        <div className={Styles.container}>
            <h2>Liste de mes favoris</h2>
            <div className={Styles.itemFavoris}>
                <div className={Styles.favoris}>
                    {favoris.length > 0 ? (
                        favoris.map((film) => (
                            <div key={film.id} className={Styles.imgfilm}>
                                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                                <button onClick={() => removeFromFavorites(film.id)}>Supprimer<MdDeleteForever className={Styles.icon} /></button>
                            </div>
                        ))
                    ) : (
                        <div className={Styles.oups}>
                            <img src={vide} alt="vide" />
                            <p>{typeEffect}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
