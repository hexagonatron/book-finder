import React from 'react';

const AddButton = ({book}) => {

    if(book._id) return null

    return (
        <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
    );
};

export default AddButton;