import React from 'react';

import * as API from '../api/api';

const DeleteButton = ({book, refreshPage}) => {
    
    if(!book._id) return null

    const deleteBook = (id) => {
        API.deleteBook(id).then(results => {
            console.log(results);
            refreshPage();
        })
    }
    
    return (
        <a className="level-item" onClick={() => deleteBook(book._id)}>
            <span className="icon is-small"><i className="fas fa-trash"></i></span>
        </a>
    );
};

export default DeleteButton;