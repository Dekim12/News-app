import React from 'react';
import uuid from 'uuid/v1';
import './loadingOverlay.scss';

const LoadingOverlay = props => {
  return (
    <section className='loading-overlay'>
      <div className='spinner'>
        <div className='circle first-circle' />
        <div className='circle second-circle' />
      </div>
    </section>
  );
};

export default LoadingOverlay;
