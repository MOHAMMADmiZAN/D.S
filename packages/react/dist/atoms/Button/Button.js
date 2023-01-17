import React from 'react';
import '@d.s/scss/dist/Button.css';

const Button = ({ title, onClick, children }) => {
    return (React.createElement("button", { title: title, className: `btn btn-primary`, onClick: onClick }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
