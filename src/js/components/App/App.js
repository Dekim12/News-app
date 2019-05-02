import React, { Component } from 'react';
import { NewsListContainer } from '../../redux/containers';
import { LoadingOverlay, FilterList } from '../index';

import './app.scss';

class App extends Component {
  componentDidMount = () => {
    this.props.callRequest();
  };

  render() {
    const { loading } = this.props;

    return (
      <div className='app'>
        <h1 className='app-headline'>PewNews</h1>
        <FilterList />
        <NewsListContainer />
        {loading ? <LoadingOverlay /> : null}
      </div>
    );
  }
}

export default App;
