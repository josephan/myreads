import React from 'react';

class BookShelf extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default BookShelf;
