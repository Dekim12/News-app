import React from 'react';
import uuid from 'uuid/v1';
import { SourceItem, Button } from '../index';
import { selectSources, isNotLastList } from '../../appLogic';
import './filter.scss';

const Filter = ({
  sourcesList,
  listNumber,
  previousFilterList,
  nextFilterList,
}) => {
  const generateSources = sources =>
    selectSources(sources, listNumber).map(source => (
      <SourceItem id={source.id} key={uuid()}>
        {source.name}
      </SourceItem>
    ));

  if (!sourcesList || !sourcesList.length) {
    return null;
  }

  return (
    <article className='select-wrapper'>
      <h3 className='sources-headline'>Sources List</h3>
      <ul className='select'>{sourcesList && generateSources(sourcesList)}</ul>
      {isNotLastList(sourcesList, listNumber) && (
        <Button className='switcher btn-next ' makeChanges={nextFilterList}>
          <i className='fa fa-chevron-right' aria-hidden='true' />
        </Button>
      )}
      {listNumber > 0 ? (
        <Button
          className='switcher btn-previous'
          makeChanges={previousFilterList}
        >
          <i className='fa fa-chevron-left' aria-hidden='true' />
        </Button>
      ) : null}
    </article>
  );
};

export default Filter;
