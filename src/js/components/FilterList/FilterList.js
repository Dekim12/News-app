import React from 'react';
import { Filter, Search } from '../index';
import './filterList.scss';

const FilterList = () => {
  return (
    <article className='filter-list'>
      <div className='content'>
        <Filter />
        <Search />
      </div>
    </article>
  );
};

export default FilterList;
