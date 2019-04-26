import React from 'react';
import { Search } from '../index';
import { FilterContainer } from '../../redux/containers';
import './filterList.scss';

const FilterList = () => {
  return (
    <article className='filter-list'>
      <div className='content'>
        <FilterContainer />
        <Search />
      </div>
    </article>
  );
};

export default FilterList;
