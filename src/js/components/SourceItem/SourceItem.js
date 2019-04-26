import React from 'react';
import './sourceItem.scss';

const SourceItem = ({ children, id }) => {
  return <li className='source-item'>{children}</li>;
};

export default SourceItem;
