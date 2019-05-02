import React from 'react';
import './loadingOverlay.scss';

const LoadingOverlay = () => {
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
