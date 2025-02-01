import React from 'react';

import Styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    type: 'favoris' | 'site';
}

const Button: React.FC<ButtonProps> = ({ text, onClick,type}) => {
    return (
        <div className={Styles.container}>
        <button onClick={onClick} className={type === 'favoris' ? Styles.favoris : Styles.site}>
            {text}
        </button>
        </div>
    );
};

export default Button;