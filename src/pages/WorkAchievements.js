import React from 'react';

const achievementsData = [
  'Led Research and UI design for the backend (Modular SaaS).',
  'Developed UI and UX frameworks for all company platforms.',
  'Designed and developed 3 eCommerce platforms for B2B2C customers on Linux server.',
  'Created and managed the blog in HubSpot, contributing to sales and marketing efforts.',
  'Participated in creating projects and feature documentation.',
  'Significantly improved Android UI, UX, and refactored code.',
  'Designed and developed 3 company websites with Linux server setup (LAMP).',
  "Prototyped the new Android UI and UX based on Google's Design System MUI 3.",
  'Developed the new Android UI using Android Studio.',
  'Created a Testing framework in Jira to improve bug fixing and future testing.',
  'Implemented various Workflows for different applications (Web, Mobile, and eCommerce).',
];

const Achievements = () => {
  // Divide achievementsData into three columns
  const columnSize = Math.ceil(achievementsData.length / 3);
  const column1 = achievementsData.slice(0, columnSize);
  const column2 = achievementsData.slice(columnSize, columnSize * 2);
  const column3 = achievementsData.slice(columnSize * 2);

  return (
    <div className="wow fadeIn pt-5" id="achievements" data-wow-delay="0.3s">
      <header className="section-header section-header-custom-bg text-center wow zoomIn pt-3" data-wow-delay="0.1s">
        <p className="sectionSeparator">A Journey of Success</p>
        <h2>Achievements and Milestones</h2>
      </header>
      <div className="row m-3 justify-content-md-center pb-5">
        <div className="col-md-3 wow fadeIn pb-4" data-wow-delay="0.3s">
          {column1.map((achievement, index) => (
            <div className="card mb-3 d-flex" key={index}>
              <div className="card-body flex-grow-1">
                <p className="card-text">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.3s">
          {column2.map((achievement, index) => (
            <div className="card mb-3 d-flex" key={index}>
              <div className="card-body flex-grow-1">
                <p className="card-text">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-3 wow fadeIn" data-wow-delay="0.3s">
          {column3.map((achievement, index) => (
            <div className="card mb-3 d-flex" key={index}>
              <div className="card-body flex-grow-1">
                <p className="card-text">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
