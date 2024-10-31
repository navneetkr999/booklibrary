import React, { useContext } from 'react'
import { BooksContext } from '../BooksContext';
import { useParams } from 'react-router-dom';

const BooksDetails = () => {
    const books = useContext(BooksContext);
    const { bookID } = useParams();
    const book = books.find(b => b.id === parseInt(bookID));
    if (books.length === 0) {
        return <p>Loading...</p>;
    }
    if (!book) {
        return <h1>Book not found</h1>;
    }
    return (
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{books.descrption}</p>
        </div>
    )
}

export default BooksDetails
