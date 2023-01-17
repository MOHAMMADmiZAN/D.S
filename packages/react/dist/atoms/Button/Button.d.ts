import React from 'react';
import "@d.s/scss/dist/Button.css";
interface BUTTON_PROPS {
    children: React.ReactNode;
    onClick: () => void;
    title: string;
}
declare const Button: React.FC<BUTTON_PROPS>;
export default Button;
