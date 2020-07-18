const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    authors: [
        { type: String }
    ],
    publisher: { type: String },
    publishedDate: { type: String },
    description: { type: String },
    industryIdentifiers: [
    ],
    readingModes: {
        text: { type: Boolean },
        image: { type: Boolean }
    },
    pageCount: { type: Number },
    printType: { type: String },
    categories: [
        { type: String }
    ],
    averageRating: { type: Number },
    ratingsCount: { type: Number },
    maturityRating: { type: String },
    allowAnonLogging: { type: Boolean },
    contentVersion: { type: String },
    panelizationSummary: {
        containsEpubBubbles: { type: Boolean },
        containsImageBubbles: { type: Boolean }
    },
    imageLinks: {
        smallThumbnail: { type: String },
        thumbnail: { type: String }
    },
    language: { type: String },
    previewLink: { type: String },
    infoLink: { type: String },
    canonicalVolumeLink: { type: String }
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;