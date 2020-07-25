import React from 'react';

const InfoButton = ({ book }) => {
    return (
        <a className="level-item" href={book.infoLink} target="blank">
            <span className="icon is-small"><i className="fas fa-info"></i></span>
        </a>
    );
};

export default InfoButton;