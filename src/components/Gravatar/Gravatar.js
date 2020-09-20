import React from 'react';

import md5 from 'md5';

const Gravatar = ({ email, className }) => {
    const hash = md5(email);

    return (
        <img className= { className } src= { `https://s.gravatar.com/avatar/${hash}?d=identicon` } alt="Avatar" />
    );
};

export default Gravatar;
