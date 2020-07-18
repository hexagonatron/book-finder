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


module.exports = {
    getAllHandler: (req, res) => {
        db.Book.find({}).sort({title: "-1"}).then(books => {
            res.status(200).json(books);
        }).catch(err => {
            res.status(503).json({error: err});
        })
    },
    searchBookHandler: async (req, res) => {
        try {
            const results = await queryGoogleBookAPI(req.params.query);

            res.status(200).json(results)

        } catch(err) {
            res.status(500).json({error: err})
        }
    },
    saveBookHandler: (req, res) => {
        const {body} = req;

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
            res.status(200).json(result)
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