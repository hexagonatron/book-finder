const fetch = require('node-fetch');
const db = require('../models');

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const queryGoogleBookAPI = (searchParam) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}&orderBy=relevance&key=${GOOGLE_API_KEY}`).then(response => response.json()).then(json => {
        return json.items.map(({volumeInfo}) => volumeInfo);
    }).catch(err => {
        throw err
    });
}

addSavedParameter = (searchArray) => {
    //Get all saved
    return db.Book.find({}).then(savedBooks => {
        const updatedResults = searchArray.map(book => {
            book.saved = savedBooks.some(savedBook => savedBook.infoLink === book.infoLink)
            return book;
        });

        return updatedResults;
    })
}

const checkSaved = (book) => {
    return db.Book.find({}).then(savedBooks => {
        return savedBooks.some(savedBook => savedBook.infoLink === book.infoLink)
    })
}

module.exports = {
    getAllHandler: (req, res) => {
        db.Book.find({}).sort({title: "-1"}).then(books => {
            res.status(200).json(books);
        }).catch(err => {
            res.status(500).json({error: err});
        })
    },
    searchBookHandler: async (req, res) => {
        try {
            const results = await queryGoogleBookAPI(req.params.query);

            const updatedResults = await addSavedParameter(results)

            res.status(200).json(updatedResults);

        } catch(err) {
            res.status(500).json({error: err})
        }
    },
    saveBookHandler: async (req, res) => {
        const {body} = req;

        if(body.saved === true) return res.status(400).json({error: "Book already saved"});

        if(await checkSaved(body)) return res.status(400).json({error: "Book already saved"});

        db.Book.create(body).then(results => {
            res.status(200).json(results)
        }).catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        })

    },
    deleteBookHandler: (req, res) => {
        const {id} = req.params;

        db.Book.deleteOne({_id: id}).then(result => {
            res.status(200).json({success: "Book removed from saved books"})
        }).catch(err => {
            res.status(500).json({error: err});
        })
    },
    deleteAllHandler: (req, res) => {
        db.Book.deleteMany({}).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({error: err})
        })
    },
}