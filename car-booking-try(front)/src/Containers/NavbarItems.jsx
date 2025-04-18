import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css';

const NavbarItems = ({ src, text, href, isLink }) => {
    const content = isLink ? (
        <Link to={href}>{text}</Link>
    ) : (
        <span>{text}</span>
    );

    return (
        <li>
            <img src={src} className="img-icon" alt={text} />
            {content}
        </li>
    );
};

export default NavbarItems;
