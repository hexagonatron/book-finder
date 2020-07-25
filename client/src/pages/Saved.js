import React, { useState, useEffect } from 'react';

import * as API from '../api/api';

import Tile from '../components/Tile';
import BookCard from '../components/BookCard';
import Hero from '../components/Hero';

const Saved = () => {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        getSaved();
    }, [])

    const getSaved = () => {
        API.getAllBooks().then(books => {
            setSavedBooks(books);
        })
    }

    const uniqueCategories = [...new Set(savedBooks.map(book => book.categories).flat())].length;
    const totalPages = savedBooks.reduce((total, book) => {
        return book.pageCount? total + book.pageCount: total;
    },0);

    return (
        <div>
            <Hero />
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="tile is-ancestor mt-3">
                            <Tile title={`Book${savedBooks.length === 1? "":"s"} Saved`} content={savedBooks.length} />
                            <Tile title={`Unique ${uniqueCategories === 1? "Category": "Categories"}`} content={uniqueCategories} />
                            <Tile title="Total Pages" content={totalPages} />
                        </div>
                    </div>
                </div>
                {savedBooks.map((book) => <BookCard key={book._id} book={book} refreshPage={getSaved}/>)}
            </div>
        </div>
    );
};

export default Saved;