import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <BookShelf name="Currently Reading" />
        <BookShelf name="Want To Read" />
        <BookShelf name="Read" />
      </div>
    );
  }
}

export default MainPage;
