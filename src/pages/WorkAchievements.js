import React from 'react';

const achievementsData = [
  {
    text: 'Led Research and UI design for the backend (Modular SaaS).',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Developed UI and UX frameworks for all company platforms.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Designed and developed 3 eCommerce platforms for B2B2C customers on Linux server.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Created and managed the blog in HubSpot, contributing to sales and marketing efforts.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Participated in creating projects and feature documentation.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Significantly improved Android UI, UX, and refactored code.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Designed and developed 3 company websites with Linux server setup (LAMP).',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Prototyped the new Android UI and UX based on Googles Design System MUI 3.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Developed the new Android UI using Android Studio.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Created a Testing framework in Jira to improve bug fixing and future testing.',
    image: require('../img/pexels-4.jpg'),
  },
  {
    text: 'Implemented various Workflows for different applications (Web, Mobile, and eCommerce).',
    image: require('../img/pexels-4.jpg'),
  },

];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="card mb-3 d-flex border-0">
      {/* Image */}
      <img
        src={achievement.image}
        alt="Achievement"
        className="card-img-top object-fit-cover"
        style={{ maxHeight: '10px' }}
      />
      <div className="card-body flex-grow-1">
        <p className="card-text">{achievement.text}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  // Divide achievementsData into three columns
  const columnSize = Math.ceil(achievementsData.length / 3);
  const column1 = achievementsData.slice(0, columnSize);
  const column2 = achievementsData.slice(columnSize, columnSize * 2);
  const column3 = achievementsData.slice(columnSize * 2);

  return (
    <div className="pt-5" id="achievements">
      <header className="section-header section-header-custom-bg text-center wow zoomIn pt-3" data-wow-delay="0.1s">
        <p className="sectionSeparator">A Journey of Success</p>
        <h2>Achievements and Milestones</h2>
      </header>
      <div className="row m-3 justify-content-md-center pb-5">
        <div className="col-md-3 wow zoomIn pb-4" data-wow-delay="0.1s">
          {column1.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
        <div className="col-md-3 wow zoomIn" data-wow-delay="0.3s">
          {column2.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
        <div className="col-md-3 wow zoomIn" data-wow-delay="0.5s">
          {column3.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;