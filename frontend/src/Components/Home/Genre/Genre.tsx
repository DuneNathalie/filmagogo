import React from 'react';

import Styles from "./Genre.module.scss";

interface GenreProps {
    title: string;
    image: string;
}

const Genre: React.FC<GenreProps> = ({title, image}) => {
    return (
        <div className={Styles.container}>
        <h1>{title}</h1>
        <p>{image}</p>
        </div>
    );
};
export default Genre;