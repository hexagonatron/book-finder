import React from 'react';

const InfoButton = ({ book }) => {
    return (
        <a class="level-item" href={book.infoLink} target="blank">
            <span class="icon is-small"><i class="fas fa-info"></i></span>
        </a>
    );
};

export default InfoButton;