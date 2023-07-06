import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

const BlogReader = ({ contentUrl }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [readingTime, setReadingTime] = useState('');

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

  const pauseSpeaking = () => {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
  };

  const resumeSpeaking = () => {
    window.speechSynthesis.resume();
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setCurrentTime('00:00');
  };

  const calculateReadingTime = () => {
    const wordsPerMinute = 250; // Average reading speed in words per minute
    const wordCount = blogContent.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    setReadingTime(`${minutes} min read`);
  };

  useEffect(() => {
    fetchBlogContent();
    // Clean up the speech synthesis when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    let intervalId;
    let currentSpeechTime = 0;

    const updateCurrentTime = () => {
      const minutes = Math.floor(currentSpeechTime / 60);
      const seconds = Math.floor(currentSpeechTime % 60);
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
      currentSpeechTime++;
    };

    if (isSpeaking) {
      intervalId = setInterval(updateCurrentTime, 1000);
    } else {
      clearInterval(intervalId);
      currentSpeechTime = 0;
    }

    const speechSynthesisBoundary = () => {
      currentSpeechTime = Math.floor(window.speechSynthesis.currentTime);
    };

    window.speechSynthesis.addEventListener('boundary', speechSynthesisBoundary);

    return () => {
      clearInterval(intervalId);
      window.speechSynthesis.removeEventListener('boundary', speechSynthesisBoundary);
    };
  }, [isSpeaking]);

  useEffect(() => {
    calculateReadingTime();
  }, [blogContent]);

  return (
    <div>
      <div className="player">
        <div className="row mb-2">

          {isSpeaking ? (
            <div className="col-auto playButton mb-1 ms-3 me-2" onClick={pauseSpeaking}>
              <FontAwesomeIcon icon={faPause} />
            </div>
          ) : (
            <div className="col-auto playButton mb-1 ms-3 me-2" onClick={speak}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          )}
          <div className="col-auto playButton mb-1 ms-3 me-2" onClick={stopSpeaking}>
            <FontAwesomeIcon icon={faStop} />
          </div>
          <div className="col-auto playButtonTime mb-1 ms-3 me-2" id="time">{currentTime}</div>
          <div className="col-auto d-none">{readingTime}</div>

        </div>
      </div>

    </div>
  );
};

export default BlogReader;
