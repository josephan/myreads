import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

import * as BooksAPI from './BookAPI.js'

class MainPage extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const groupedBooks = books.reduce((acc, item) => {
        let key = item.shelf;
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
      }, {});
      this.setState({ ...groupedBooks })
    })
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div>
        <h1>Main Page</h1>
        <BookShelf name="Currently Reading" books={currentlyReading} />
        <BookShelf name="Want To Read" books={wantToRead} />
        <BookShelf name="Read" books={read} />
      </div>
    );
  }
}

export default MainPage;
