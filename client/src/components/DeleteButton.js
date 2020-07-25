import React from 'react';

const DeleteButton = ({book}) => {
    
    if(!book._id) return null
    
    return (
        <a class="level-item">
            <span class="icon is-small"><i class="fas fa-trash"></i></span>
        </a>
    );
};

export default DeleteButton;