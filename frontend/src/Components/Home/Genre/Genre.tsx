import React, { useEffect, useState } from 'react';

import Styles from "./Genre.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface GenreProps {
    theme?: string;
    data: Array<{
        id: number;
        title?: string;
        poster_path: string;
        overview?: string;
    }>;
}

const Genre: React.FC<GenreProps> = ({ theme, data }) => {
    const navigate = useNavigate();

    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 700 ? 1 : 8);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth <= 700 ? 1 : 8);
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const handleClickedFilm = (event: React.MouseEvent<HTMLImageElement>) => {
        const id = Number(event.currentTarget.getAttribute('data-id'));
        localStorage.setItem('idFilm', id.toString());

        // Déclenche un événement personnalisé
        window.dispatchEvent(new Event('storage'));

        navigate('/descriptif');
    };

    return (
        <div className={Styles.container}>
            <h2>{theme}</h2>
            <div className={Styles.swiper}>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                    navigation
                    style={{
                        '--swiper-navigation-color': '#fff',

                    } as React.CSSProperties}
                >
                    {data.map((film) => (
                        <SwiperSlide key={film.id} className={Styles.slide}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                                data-id={film.id}
                                onClick={handleClickedFilm}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default Genre;