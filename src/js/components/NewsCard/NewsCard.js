import React from 'react';
import './newsCard.scss';

const NewsCard = ({ data }) => {
  const { url, author, publishedAt, title, urlToImage, description } = data;

  const prepareAuthorName = name => {
    if (name === '' || typeof name !== 'string') {
      return 'unknown';
    }

    const wordsCount = 3;
    const preparedName = name.split(' ');

    if (preparedName.length > wordsCount) {
      return preparedName
        .slice(0, wordsCount)
        .join(' ')
        .concat('...');
    }
    return preparedName.slice(0, wordsCount).join(' ');
  };

  return (
    <a
      href={url}
      className='news-card-wrapper'
      target='_blank'
      rel='noopener noreferrer'
    >
      <article className='news-card'>
        <img src={urlToImage} className='news-images' alt={description} />
        <h2 className='news-card-name'>{title}</h2>
        <p className='news-card-description'>{description}</p>
        <div className='records-list'>
          <p className='record author'>
            Author:
            <span className='record-content'>{prepareAuthorName(author)}</span>
          </p>
          <p className='record publication'>
            Publication:
            <span className='record-content'>{publishedAt.slice(0, 10)}</span>
          </p>
        </div>
      </article>
    </a>
  );
};

export default NewsCard;
