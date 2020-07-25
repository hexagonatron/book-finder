import React from 'react';

import InfoButton from './InfoButton';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const BookCard = ({ book }) => {
    return (
        <div className="columns">
            <div className="column is-12">

                <article class="media has-background-white px-3 py-3">
                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img src={book.imageLinks.thumbnail} />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong className="is-size-4">{book.title}</strong> <small>{book.subtitle}</small>
                                <br />
                                <small>By {book.authors.join(", ")}</small>
                                <br />
                            {book.description}
                    </p>
                    <p>
                        {book.categories.map(category => <span class="tag is-link">{category}</span>)}
                    </p>
                        </div>

                        <nav class="level is-mobile">
                            <div class="level-left">
                                <InfoButton book={book}/>
                                <AddButton book={book}/>
                                <DeleteButton book={book}/>

                                
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BookCard;