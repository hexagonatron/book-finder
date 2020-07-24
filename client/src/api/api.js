const queryApi = (endpoint, options = {}) => {
    return new Promise((resolve, reject) => {
        return fetch(endpoint, {
            ...options
        }).then(result => result.json()).then(json => {
            return resolve(json);
        }).catch(err => {
            return reject(err);
        })
    })
}

const getAllBooks = async () => {
    try {
        const books = await queryApi('/api/books/all');

        return books

    } catch(err) {
        throw err
    }
}

const getBook = async (query) => {
    try {
        const queryResults = await queryApi(`/api/book/${query}`);
        return queryResults;
    } catch(err) {
        throw err
    }
}

const saveBook = async (book) => {
    try {
        const response = await queryApi('/api/book/add', {method: 'POST', body: book});
        return response;
    } catch(err) {
        throw err
    }
}

const deleteBook = async (id) => {
    try {
        const response = await queryApi(`/api/book/${id}`, {method: 'DELETE'});
        return response;
    } catch (err) {
        throw err
    }
}

const deleteAllBooks = async () => {
    try {
        const response = await queryApi(`/api/book/all`, {method: 'DELETE'});
        return response
    } catch (err) {
        throw err
    }
}

export default getAllBooks;
export default getBook;
export default saveBook;
export default deleteBook;
export default deleteAllBooks;