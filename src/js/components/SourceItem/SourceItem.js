import React, { useCallback } from 'react';
import './sourceItem.scss';

const SourceItem = ({ children, id, findSource }) => {
  const findCurrentSource = useCallback(() => {
    findSource(id);
  }, [id]);

  return (
    <li className='source-item' onClick={findCurrentSource}>
      {children}
    </li>
  );
};

export default SourceItem;
