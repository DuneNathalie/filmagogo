import React from 'react';

import Styles from './Button.module.scss';

interface ButtonProps {
    title: string;
    onClick: () => void;
    type: 'favoris' | 'site';
}

const Button: React.FC<ButtonProps> = ({ title, onClick,type}) => {
    return (
        <div className={Styles.container}>
        <button onClick={onClick} className={type === 'favoris' ? Styles.favoris : Styles.site}>
            {title}
        </button>
        </div>
    );
};

export default Button;