import React from 'react';
import  "@d.s/scss/dist/Button.css"

interface BUTTON_PROPS {
    children: React.ReactNode;
    onClick: () => void;
    title: string;

}

const Button: React.FC<BUTTON_PROPS> = ({title,onClick,children}) => {
    return (
        <button title={title} className={`btn btn-primary`} onClick={onClick}>{children}</button>
    );
};

export default Button;