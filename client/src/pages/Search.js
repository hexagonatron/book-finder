import React,{useState, useEffect} from 'react';

import * as API from '../api/api';

import Hero from '../components/Hero'
import BookCard from '../components/BookCard'

const Search = () => {

    const [results, setResults] = useState([]);
    const [searchTerm, updateSearchTerm] = useState('');

    //Will only call api if user has not typed in the search box for 250ms
    useEffect(() => {

        const timer = setTimeout(() => {
            getResults(searchTerm);
        }, 250)

        return () => clearTimeout(timer);

    }, [searchTerm])

    //query api
    const getResults = (searchTerm) => {
        if(!searchTerm) return setResults([]);
        API.getBook(searchTerm).then(books => {
            setResults(books);
        })
    }

    return (
        <div>
            <Hero />
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <div className="card mt-3">
                            <div className="card-content">
                                <div className="field">
                                    <label className="label">Search for a book</label>
                                    <p className="control has-icons-left">
                                        <input className="input" type="text" placeholder="Search" onChange={(e) => updateSearchTerm(e.target.value)}/>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {results.map((book, i) => <BookCard key={i} book={book} pageRefresh={getResults}/>)}
                
            </div>
        </div>
    );
};

export default Search;