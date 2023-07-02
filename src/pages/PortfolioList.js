import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioPage = ({ id, title, subtitle, to, image, content }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="card d-flex flex-column">
            <img src={image} className="card-img-top" alt="portfolio Image" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text fw-light">{subtitle}</p>
                <p className="card-text">{content}</p>
                <div className="mt-auto">
                    <Link to={to} className="btn btn-primary" onClick={handleClick}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

const PortfolioList = () => {
    const portfolio = [
        {
            id: 1,
            title: 'Job Seeking',
            subtitle: "Inprogress..",
            to: '/portfolio/jobseeking',
            image: require('../img/jobseeking/jobseeking-cover.jpeg'),
            content: 'User journey and behavior analytics. User actions, awareness, consideration, loyalty, feelings, opportunities, and pain points.',
            hidden: false,
        },

        {
            id: 2,
            title: 'Collaboration Workflow Platform',
            subtitle: "Inprogress..",
            to: '/portfolio/collaboration',
            image: require('../img/collaboration/cwp.png'),
            content: 'Enabling a smooth and effective system for real-time collaboration on documents.',
            hidden: false,
        },

        {
            id: 3,
            title: "Smart Shopping",
            subtitle: "Next..",
            to: '/',
            image: require('../img/smart-shopping/smart-shopping-cover.jpg'),
            content: 'Why not take pleasure when there is an opportunity?',
            hidden: false,
        },

        {
            id: 4,
            title: "Smart Banking",
            subtitle: "After Next..",
            to: '/',
            image: require('../img/smart-banking/hassle-free-banking.jpg'),
            content: 'Hassle free banking application. It is time to get productive.',
            hidden: false,
        },

    ];

    const renderPortfolio = () => {
        return portfolio.map((portfolio) => (
            <div key={portfolio.id} className={`col-md-4 mb-4 d-flex ${portfolio.hidden ? 'd-none' : ''}`}>
                <PortfolioPage
                    id={portfolio.id}
                    title={portfolio.title}
                    subtitle={portfolio.subtitle}
                    to={portfolio.to}
                    image={portfolio.image}
                    content={portfolio.content}
                />
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="row">
                {renderPortfolio()}
            </div>
        </div>
    );
};

export default PortfolioList;
