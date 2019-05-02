import React, { Component } from 'react';
import { Button } from '../index';
import './search.scss';

class Search extends Component {
  searchQuery = '';

  addSearchQuery = event => {
    const currentValue = event.target.value;
    this.searchQuery = currentValue.replace(/^\s+|\s+$/g, '');
  };

  sendRequest = event => {
    event.preventDefault();
    const { searchRequest, callRequest } = this.props;
    if (this.searchQuery) {
      searchRequest(this.searchQuery);
    } else {
      callRequest();
    }
  };

  render() {
    return (
      <article className='search'>
        <form className='search-form' onSubmit={this.sendRequest}>
          <input
            className='search-input'
            type='text'
            placeholder='Search...'
            maxLength='100'
            onChange={this.addSearchQuery}
          />
        </form>
        <Button className='button-for-search' makeChanges={this.sendRequest}>
          <i className='fa fa-search' aria-hidden='true' />
        </Button>
      </article>
    );
  }
}
export default Search;
