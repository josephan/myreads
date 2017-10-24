import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
