import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Players: {props.totalPlayers + 1}</span>
        </header>
    );
};

export default Header;
