import React, { Component } from 'react';
import { LoadingOverlay, NewsList } from '../index';

import './app.scss';

class App extends Component {
  componentDidMount = () => {
    this.props.callRequest();
  };

  render() {
    const { loading } = this.props;

    return (
      <div className='app'>
        <section className='content'>
          <h1 className='app-headline'>PewNews</h1>
        </section>
        {loading ? <LoadingOverlay /> : null}
      </div>
    );
  }
}

export default App;
