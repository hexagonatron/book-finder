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

export const getAllBooks = async () => {
    try {
        const books = await queryApi('/api/books/all');

        return books

    } catch(err) {
        throw err
    }
}

export const getBook = async (query) => {
    try {
        const queryResults = await queryApi(`/api/book/${query}`);
        return queryResults;
    } catch(err) {
        throw err
    }
}

export const saveBook = async (book) => {
    try {
        const response = await queryApi('/api/book/add', {method: 'POST', body: JSON.stringify(book), headers: {'Content-Type': 'application/json'}});
        return response;
    } catch(err) {
        throw err
    }
}

export const deleteBook = async (id) => {
    try {
        const response = await queryApi(`/api/book/${id}`, {method: 'DELETE'});
        return response;
    } catch (err) {
        throw err
    }
}

export const deleteAllBooks = async () => {
    try {
        const response = await queryApi(`/api/book/all`, {method: 'DELETE'});
        return response
    } catch (err) {
        throw err
    }
}
