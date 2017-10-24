import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class BookShelf extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { name, books } = this.props

    return (
      <div>
        <h2>{name}</h2>
        <div className="book-shelf">
          {books.map(book => (
            <Book book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookShelf;
