import React from 'react';

import * as API from '../api/api';

import InfoButton from './InfoButton';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const BookCard = ({ book, refreshPage }) => {

    return (
        <div className="columns">
            <div className="column is-12">

                <article className="media has-background-white px-3 py-3">
                    <figure className="media-left image">
                        
                            <img src={book.imageLinks? book.imageLinks.thumbnail: ""} />
                        
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong className="is-size-4">{book.title}</strong> <small>{book.subtitle}</small>
                                <br />
                                <small>By {book.authors? book.authors.join(", "): ""}</small>
                                <br />
                            {book.description}
                    </p>
                    <p>
                        {book.categories? book.categories.map((category, i) => <span key={i} className="tag is-link">{category}</span>):""}
                    </p>
                        </div>

                        <nav className="level is-mobile">
                            <div className="level-left">
                                <InfoButton book={book}/>
                                <AddButton book={book}/>
                                <DeleteButton book={book} refreshPage={refreshPage}/>

                                
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BookCard;