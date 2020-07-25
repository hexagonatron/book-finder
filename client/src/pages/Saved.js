import React, { useState } from 'react';

import Tile from '../components/Tile';
import BookCard from '../components/BookCard';
import Hero from '../components/Hero';

const Saved = () => {

    const [savedBooks, setSavedBooks] = useState([
        {
            "readingModes": {
                "text": true,
                "image": false
            },
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ialrgIT41OAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ialrgIT41OAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "authors": [
                "Malcolm Gladwell"
            ],
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780141903491"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "014190349X"
                }
            ],
            "categories": [
                "Psychology"
            ],
            "_id": "5f12752f64dbbc2a4860eb9a",
            "title": "Outliers",
            "subtitle": "The Story of Success",
            "publisher": "Penguin UK",
            "publishedDate": "2008-11-18",
            "description": "From the bestselling author of Blink and The Tipping Point, Malcolm Gladwell's Outliers: The Story of Success overturns conventional wisdom about genius to show us what makes an ordinary person an extreme overachiever. Why do some people achieve so much more than others? Can they lie so far out of the ordinary? In this provocative and inspiring book, Malcolm Gladwell looks at everyone from rock stars to professional athletes, software billionaires to scientific geniuses, to show that the story of success is far more surprising, and far more fascinating, than we could ever have imagined. He reveals that it's as much about where we're from and what we do, as who we are - and that no one, not even a genius, ever makes it alone. Outliers will change the way you think about your own life story, and about what makes us all unique. 'Gladwell is not only a brilliant storyteller; he can see what those stories tell us, the lessons they contain' Guardian 'Malcolm Gladwell is a global phenomenon ... he has a genius for making everything he writes seem like an impossible adventure' Observer 'He is the best kind of writer - the kind who makes you feel like you're a genius, rather than he's a genius' The Times",
            "pageCount": 320,
            "printType": "BOOK",
            "averageRating": 4.5,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.13.12.0.preview.2",
            "language": "en",
            "previewLink": "http://books.google.com.au/books?id=ialrgIT41OAC&printsec=frontcover&dq=outliers&hl=&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=ialrgIT41OAC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ialrgIT41OAC",
            "__v": 0
        },
        {
            "title": "How Democracies Die",
            "subtitle": "The International Bestseller: What History Reveals About Our Future",
            "authors": [
                "Steven Levitsky",
                "Daniel Ziblatt"
            ],
            "publisher": "Penguin UK",
            "publishedDate": "2018-01-25",
            "description": "Two Harvard professors explain the dangerous world we face today Democracies can die with a coup d'état - or they can die slowly. This happens most deceptively when in piecemeal fashion, with the election of an authoritarian leader, the abuse of governmental power and the complete repression of opposition. All three steps are being taken around the world - not least with the election of Donald Trump - and we must all understand how we can stop them. In How Democracies Die, Harvard professors Steven Levitsky and Daniel Ziblatt draw insightful lessons from across history - from the rule of General Augusto Pinochet in Chile to the quiet undermining of Turkey's constitutional system by President Recip Erdogan - to shine a light on regime breakdown across the twentieth and twenty-first centuries. Notably they point to the dangers of an authoritarian leader faced with a major crisis. Based on years of research, they present a deep understanding of how and why democracies die; an alarming analysis of how democracy is being subverted today in the US and beyond; and a guide for maintaining and repairing a threatened democracy, for governments, political parties and individuals. History doesn't repeat itself. But we can protect our democracy by learning its lessons, before it's too late.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780241317990"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0241317991"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 320,
            "printType": "BOOK",
            "categories": [
                "Law"
            ],
            "averageRating": 4,
            "ratingsCount": 14,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.7.8.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=GmkwDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=GmkwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com.au/books?id=GmkwDwAAQBAJ&printsec=frontcover&dq=how+democracies+die&hl=&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=GmkwDwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=GmkwDwAAQBAJ"
        }
    ])

    return (
        <div>
            <Hero />
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div class="tile is-ancestor mt-3">
                            <Tile title="Books Saved" content={0} />
                            <Tile title="Unique Catagories" content={8} />
                            <Tile title="Total Pages" content={10000} />
                        </div>
                    </div>
                </div>
                {savedBooks.map(book => <BookCard book={book}/>)}
            </div>
        </div>
    );
};

export default Saved;