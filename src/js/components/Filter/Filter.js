import React from 'react';
import uuid from 'uuid/v1';
import { SourceItem, Button } from '../index';
import './filter.scss';

const Filter = ({
  sourcesList,
  listNumber,
  previousFilterList,
  nextFilterList,
  searchSource,
  sourcesExist,
  lastList,
}) => {
  if (!sourcesExist) {
    return null;
  }

  const generateSources = sources =>
    sources.map(source => (
      <SourceItem id={source.id} key={uuid()} findSource={searchSource}>
        {source.name}
      </SourceItem>
    ));

  return (
    <article className='select-wrapper'>
      <h3 className='sources-headline'>Sources List</h3>
      <ul className='select'>{generateSources(sourcesList)}</ul>
      {lastList && (
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
