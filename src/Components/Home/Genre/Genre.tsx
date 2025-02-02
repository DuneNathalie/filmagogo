import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from "./Genre.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from 'swiper/modules';
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
    console.log("Genre props", { data, theme }); 
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 700 ? 1 : 8);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setSlidesPerView(1);
            } else if (window.innerWidth <= 750) {
                setSlidesPerView(2);
            } else if (window.innerWidth <= 950) {
                setSlidesPerView(3);
            } else if (window.innerWidth <=1400) {
                setSlidesPerView(4);
            } else if (window.innerWidth <= 1700) {
                setSlidesPerView(6);
            } else if (window.innerWidth <= 1900) {
                setSlidesPerView(7);
            } else {
                setSlidesPerView(8);
            }
        };
    
        handleResize();
    
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