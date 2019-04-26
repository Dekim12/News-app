import React from 'react';
import { FilterContainer, SearchContainer } from '../../redux/containers';
import './filterList.scss';

const FilterList = () => {
  return (
    <article className='filter-list'>
      <div className='content'>
        <FilterContainer />
        <SearchContainer />
      </div>
    </article>
  );
};

export default FilterList;
