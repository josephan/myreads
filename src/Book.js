import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  render() {
    const book = this.props.book

    return (
      <div className="book">
        <img src={book.imageLinks.thumbnail}/>
        <p>{book.title}</p>
      </div>
    );
  }
}

export default Book;
