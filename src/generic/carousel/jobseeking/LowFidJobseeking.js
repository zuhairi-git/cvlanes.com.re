import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const LowFidJobseeking = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='mb-5 p-5 brand-color-bg rounded-5' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Splash.jpg?text=First slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Splash</h3>
          <p>After Delay Effect.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Login.jpg?text=Second slide"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Login</h3>
          <p>Login Screen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Main.jpg?text=Third slide"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Home</h3>
          <p>Search for jobs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Calendar.jpg?text=Fourth slide"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Calendar</h3>
          <p>Applied Jobs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/CalendarNext.jpg?text=Fifth slide"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Calendar</h3>
          <p>Next Shifts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/CalendarHistory.jpg?text=Sixth slide"
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Calendar</h3>
          <p>History.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Messeges.jpg?text=Seventh slide"
          alt="Seventh slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Calendar</h3>
          <p>History.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 rounded-15"
          src="../img/jobseeking/low-fid/Profile.jpg?text=Eights slide"
          alt="Eights slide"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Calendar</h3>
          <p>History.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LowFidJobseeking;