import React, { useEffect, useState } from 'react';

const BlogReader = ({ contentUrl }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [blogContent, setBlogContent] = useState('');

  const fetchBlogContent = async () => {
    try {
      const response = await fetch(contentUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch blog content');
      }
      const content = await response.text();
      setBlogContent(content);
    } catch (error) {
      console.error(error);
    }
  };

  const speak = () => {
    const speech = new SpeechSynthesisUtterance(blogContent);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    fetchBlogContent();
    // Clean up the speech synthesis when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Rest of the code remains the same

  return (
    <div>
      <button className='btn btn-primary m-2' onClick={isSpeaking ? stopSpeaking : speak}>
        <i className='fa fa-play me-2'></i>{isSpeaking ? 'Stop' : 'Read Blog'}
      </button>
    </div>
  );
};

export default BlogReader;
