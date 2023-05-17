import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const updatedBooks = [
        ...books,
        {}
    ]

    setBooks(updatedBooks);

    const handleCreateBook = (title) => {
        console.log('Title: ', title);
    }

    return (
        <div>
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
}

export default App;
