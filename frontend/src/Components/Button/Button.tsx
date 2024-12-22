import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
    style?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, style }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: style }}>
            {title}
        </button>
    );
};