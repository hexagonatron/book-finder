import React from 'react';

import * as API from '../api/api';

const AddButton = ({book}) => {

    if(book._id) return null



    return (
        <a className="level-item" onClick={() => {API.saveBook(book)}}>
            <span className="icon is-small"><i className="fas fa-heart"></i></span>
        </a>
    );
};

export default AddButton;