import React from 'react';

import Styles from "./Film.module.scss";

interface FilmProps {
    title:string;
    description:string;
    img:string;
}

const Film: React.FC<FilmProps> = ({title,description,img}) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <img src={img}/>
        </div>
    );
};
export default Film;