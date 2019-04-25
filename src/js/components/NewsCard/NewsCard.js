import React from 'react';
import './newsCard.scss';

const NewsCard = ({ name, description, url, language }) => {
  return (
    <a
      href={url}
      className='news-card-wrapper'
      target='_blank'
      rel='noopener noreferrer'
    >
      <article className='news-card'>
        <h2 className='news-card-name'>{name}</h2>
        <p className='news-card-description'>{description}</p>
        <p className='news-languages'>
          Language: <span className='language'>{language}</span>
        </p>
      </article>
    </a>
  );
};

export default NewsCard;
