import React, { useState, useEffect } from 'react';

const ReadingTimeEstimator = ({ content }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const wordsPerMinute = 250; 
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    setReadingTime(time);
  }, [content]);

  return (
    <div>
      <p className='blog-author-position text-secondary'>Estimated reading time: {readingTime} minute{readingTime === 1 ? '' : 's'}</p>
    </div>
  );
};

export default ReadingTimeEstimator;
