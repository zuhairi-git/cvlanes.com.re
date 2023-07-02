import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import WOW from 'wowjs';
import TypewriterComponent from 'typewriter-effect';
import Hero from '../img/Hero-left.png'
import MyCV from '../pdf/CV.pdf'
import TopNav from '../pages/TopNav';
import BackToTopButton from '../generic/BackToTopButton';
import { Envelope, Facebook, Tiktok, Twitter, Youtube } from "react-bootstrap-icons";
import Footer from '../pages/Footer'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { LinkedIn } from '@mui/icons-material';

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div>

                <div className="App overflow-x-hidden">
                    <TopNav />

                    <div className='hero-bg'>
                        <div className="hero hero-bg-img" id="home">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="hero-content">
                                            <div className="hero-text mb-3 text-start">
                                                <div className='text-light' style={{ fontSize: '1.4rem' }}><b>I'm</b></div>
                                                <h1>Ali Zuhairi</h1>
                                                <h2 style={{ fontSize: '1.4rem' }}>
                                                    <TypewriterComponent
                                                        options={{
                                                            strings: ['Professional Product Designer', 'Web Designer', 'Workflow Management Developer', 'Web UI Developer', 'Front End UI Developer', 'App Designer', 'App UI Developer'],
                                                            autoStart: true,
                                                            delay: 30,
                                                            deleteSpeed: 10,
                                                            loop: true,
                                                        }}
                                                    />
                                                </h2>
                                            </div>
                                            <hr className='text-light' />
                                            <div className="reminderSelf text-start mt-4 mb-5">
                                                <h5 className='reminderSelf'>NOTE TO SELF</h5>
                                                <div className='text-light'>
                                                    <FormatQuoteIcon /> Feeling discouraged when you're unable to achieve your goals, despite trying different methods and staying persistent, does not define you as a failure. It's important to remember that setbacks and challenges are a natural part of the journey towards success. Achieving success is a journey, and it's crucial to continue pushing forward until you reach your desired outcome.<FormatQuoteIcon />
                                                </div>
                                                <i className='text-light'><b>- Ali</b></i>
                                            </div>
                                            <div className='mb-3 d-none'>
                                                <a className="buttonGeneric mb-2 hidden-xxs hidden-xs hidden-sm" href="#team">Contact Me</a>
                                                <a className="buttonGeneric mb-2 hidden-md hidden-lg hidden-xl hidden-xxl" href="#teammobile">Contact Me</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 d-md-block">
                                        <div className="hero-image pe-0 wow zoomIn" data-wow-delay="0.1s">
                                            <img src={Hero} alt="Ali" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 mt-5">
                                    <div className="about-content">
                                        <div className="section-header text-left">
                                            <p className='sectionSeparator'>About Me</p>
                                            <h2>10 Years Experience</h2>
                                        </div>
                                        <div className="about-text mb-4">
                                            <p>
                                                As a product designer, the Double Diamond design model serves as the bedrock of my design process. It empowers me to embrace divergent thinking, exploring a multitude of ideas and possibilities, ultimately leading to the creation of innovative products. Simplicity and elegance are fundamental principles that underpin my design philosophy, driving me to craft designs that are both visually appealing and intuitively functional.
                                            </p>
                                            <p>
                                                Moreover, I possess strong problem-solving skills, which enable me to approach complex challenges with a strategic and analytical mindset.
                                            </p>
                                            <p>
                                                With this approach, I am well-equipped to conceptualize, prototype, and iterate upon designs that are not only visually striking but also highly functional and user-centric. By incorporating the Double Diamond model into my design process and emphasizing simplicity, elegance, and problem-solving, I consistently create designs that captivate users and solve complex challenges with precision and creativity.
                                            </p>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 hidden-xxs hidden-xs hidden-sm mb-5'>
                                                <a className="buttonGeneric" href="#team">Keep In Touch With Me</a>
                                            </div>
                                            <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl mb-4'>
                                                <a className="buttonGeneric w-100" href="#teammobile">Keep In Touch With Me</a>
                                            </div>
                                            <div className='col-md-6 hidden-xxs hidden-xs hidden-sm'>
                                                <a className="buttonGeneric" href={MyCV}>My CV (PDF)</a>
                                            </div>
                                            <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl'>
                                                <a className="buttonGeneric w-100" href={MyCV}>My CV (PDF)</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="about-content">
                                        <div className="section-header text-left">
                                            <p className='sectionSeparator'>Strengths</p>
                                            <h2>Skillset</h2>
                                        </div>
                                        <div className="skills">
                                            <div className="skill-name text-start">
                                                <p>UI/UX - Figma & Adobe XD</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Maze - Test and Validate Prototypes and Concepts</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Adobe CC</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Design Systems (Google, Apple, Atlassian)</p><p></p>
                                            </div>
                                            <ProgressBar now={80} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Project Management</p><p></p>
                                            </div>
                                            <ProgressBar now={80} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Test Management - Zephyr Scale for Jira</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Web / Mobile App UI Development</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>WordPress and HubSpot CMS</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Agile Methodology (Jira, Sprint, Scrum, Kanban)</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>Global Admin: SharePoint, GitHub, GCP, AWS</p><p></p>
                                            </div>
                                            <ProgressBar now={85} label={``} />

                                            <div className="skill-name text-start">
                                                <p>React JS, Programming, and Linux Servers</p><p></p>
                                            </div>
                                            <ProgressBar now={55} label={``} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience" id="experience">
                        <div className="container">
                            <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                                <p className='sectionSeparator'>My Resume</p>
                                <h2>Working Experience</h2>
                            </header>
                            <div className="timeline">
                                <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">2017 - Present</div>
                                        <h2>Professional Product Designer</h2>
                                        <h4>Reslink, Espoo, Finland</h4>
                                        <p>
                                            Workflow and Cloud Management, WebApp (SaaS), and Mobile.<br /> @Reslink Solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">2016 - Present</div>
                                        <h2>Senior UI/UX Designer</h2>
                                        <h4>Reslink, Helsinki, Finland</h4>
                                        <p>
                                            Web Application UI/UX and Android UI Development
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">2014 - 2016</div>
                                        <h2>Graphic Designer UI/UX</h2>
                                        <h4>Reslink, Helsinki, Finland</h4>
                                        <p>
                                            Graphic and Website Designer, Android and iOS Graphics and Prototype.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">2000 - 2014</div>
                                        <h2>Freelance Web and Mobile UI Designer</h2>
                                        <h4>From Damascus to Espoo</h4>
                                        <p>
                                            Website and Android Developer.
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">Long time a go</div>
                                        <h2>Graphic Designer and Publisher</h2>
                                        <h4>Various Magazines and Newspapers — Tehran, Iran</h4>
                                    </div>
                                </div>
                                <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                    <div className="timeline-text text-start">
                                        <div className="timeline-date">Once upon a time</div>
                                        <h2>Junior Publisher - Junior IT Expert</h2>
                                        <h4>Study and Work</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='separator'></div>

                    <div className="wow zoomIn" id="achievements" data-wow-delay="0.1s">
                        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>My Achievements</p>
                            <h2>To do or not to do</h2>
                        </header>
                        <div className="row m-3 justify-content-md-center mb-5">
                            <div className="col-md-5 col-sm-12 wow slideInLeft">
                                <h3 className="text-start">Ongoing</h3>
                                <ul className="">
                                    <li className="text-start">Prototyping the new Android UI and UX based on Google practices (Material UI 3) to stay competitive in the market.</li>
                                    <li className="text-start">Developing the new Android UI with Android Studio.</li>
                                    <li className="text-start">Taking the lead on developing and introducing a new UI framework for the backend(Modular SaaS) next version and modernizing the UI and UX and improving the security.</li>
                                    <li className="text-start">And adding to my skills, I started to create a Testing framework in Jira to improve and fix the bugs in the new and the next version using best practices. It will save time for future testing and it could be also used as documentation for future references.</li>
                                    <li className="text-start">Creating a variety of Workflow for different applications (Web, Mobile, and eCommerce).</li>
                                </ul>
                            </div>
                            <div className="col-md-5 col-sm-12 wow slideInRight">
                                <h3 className="text-start">Done</h3>
                                <ul className="">
                                    <li className="text-start">Taking the lead on designing the UI for the backend(Modular SaaS) legacy versions.</li>
                                    <li className="text-start">Developing UI and UX frameworks for all company's platforms.</li>
                                    <li className="text-start">Taking the lead on developing the backend(Modular SaaS) new version and delivering a platform the company uses today.</li>
                                    <li className="text-start">Meeting goals by designing and developing 3 eCommerce platforms for the company and our B2B2C customers + Linux server setup (LAMP).</li>
                                    <li className="text-start">Meeting goals by designing and developing 3 company websites + Linux server setup (LAMP).</li>
                                    <li className="text-start">Create and develop the blog in HubSpot and participate in sales and marketing.</li>
                                    <li className="text-start">Participating in creating documentation.</li>
                                    <li className="text-start">Significantly improve Android UI, UX, and refactoring code.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='separator mt-5'></div>
                    <div className='row m-3 justify-content-md-center mb-5 wow zoomIn brand-bg-light' data-wow-delay="0.1s">
                        <div className='wow slideInLeft col-md-5 col-sm-12 text-end align-self-center mt-5' data-wow-delay="0.2s">
                            <div className='text-center'>
                                <h6>Imagine this with <b>James Earl Jones</b> Voice</h6>
                                <h1 className="mb-3">This is on HubSpot</h1>
                                <a className="buttonGeneric m-2" href="https://cvlanes.online">cvlanes.online</a>
                            </div>
                        </div>
                        <div className='wow slideInRight col-md-5 col-sm-12 image-col-align pt-5' data-wow-delay="0.2s">
                            <img src={require("../img/dw.png")} alt='DW' className='image-col' />

                        </div>
                    </div>
                    <div className='separator mt-5'></div>

                    <div className="team mb-5 mt-5 hidden-xxs hidden-xs hidden-sm" id="team">
                        <div className="container">
                            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                                <p className='sectionSeparator'>Social Media</p>
                                <h2>Get in touch with me</h2>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img src={require("../img/takeAction.jpg")} alt="Ali" />
                                        </div>
                                        <div className="team-text text-start">
                                            <div style={{ borderLeft: 'solid 3px #FFE54C', paddingLeft: '10px' }} className='mb-3'>
                                                <h2>Ali Zuhairi</h2>
                                                <h4 style={{ marginBottom: '0', lineHeight: '20px' }}>Creative Problem-Solving, Divergent Thinking, Thoughtful Disruption & Exploring New Perspectives</h4>
                                            </div>
                                            <div className="team-social pb-1">
                                                <a className="buttonIcon" href="https://twitter.com/AliZohairi"><Twitter /></a>
                                                <a className="buttonIcon" href="https://www.linkedin.com/in/ali-zuhairi/"><LinkedIn /></a>
                                                <a className="buttonIcon" href="https://www.facebook.com/zuhairi.one"><Facebook /></a>
                                            </div>
                                            <div className="team-social">
                                                <a className="buttonIcon" href="https://www.tiktok.com/@zuhairi.ali"><Tiktok /></a>
                                                <a className="buttonIcon" href="https://www.youtube.com/@Ali.Zuhairi"><Youtube /></a>
                                                <a className="buttonIcon" href="mailto:zohairi@live.com"><Envelope /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team mb-5 mt-5 hidden-md hidden-lg hidden-xl hidden-xxl" id="teammobile">
                        <div className="container">
                            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                                <p className='sectionSeparator'>Social Media</p>
                                <h2>Get in touch with me</h2>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.0s">
                                    <div className="team-item">
                                        <div className="team-img" style={{ width: '100%' }}>
                                            <img src={require("../img/takeAction.jpg")} alt="Ali" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.0s">
                                        <div className="text-start">
                                            <div style={{ borderLeft: 'solid 3px #FFE54C', paddingLeft: '10px' }} className='mb-3'>
                                                <h2>Ali Zuhairi</h2>
                                                <p style={{ marginBottom: '0', lineHeight: '20px' }}>Creative Problem-Solving, Divergent Thinking, Thoughtful Disruption & Exploring New Perspectives</p>
                                            </div>
                                            <div className="team-social d-block text-center pb-1">
                                                <a className="buttonIcon" href="https://twitter.com/AliZohairi"><i className="fab fa-twitter"></i></a>
                                                <a className="buttonIcon" href="https://www.linkedin.com/in/ali-zuhairi/"><i className="fab fa-linkedin-in"></i></a>
                                                <a className="buttonIcon" href="https://www.facebook.com/zuhairi.one"><i className="fab fa-facebook-f"></i></a>
                                                <a className="buttonIcon" href="https://www.tiktok.com/@zuhairi.ali"><Tiktok /></a>
                                                <a className="buttonIcon" href="https://www.youtube.com/@Ali.Zuhairi"><Youtube /></a>
                                                <a className="buttonIcon" href="mailto:zohairi@live.com"><i className="fa fa-envelope"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                    </div>

                    <div className='separator'></div>

                    <div className="review wow fadeInUp mt-5" data-wow-delay="0.1s" id="review">
                        <div className="container">
                            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                                <p className='sectionSeparator'>Thank You for the</p>
                                <h2>Recommendations</h2>
                            </div>

                            <div className="review-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <div className="reviews-carousel row">
                                <div className="col-md-6 col-xs-12 wow slideInLeft" data-wow-delay="0.3s">
                                    <div className="review-item">
                                        <div className="review-img">
                                            <img src={require("../img/review-2.jpg")} alt="Buda" />
                                        </div>
                                        <div className="review-text">
                                            <p className='text-start'>
                                                Ali is an exceptional and experienced UI/UX designer with more than ten years of professional experience specialising in product design for technology companies. Ali believes that design is not about deliverables and beautiful pixels but about solving problems and achieving business and user goals. As a product designer, Ali focuses on usability, user experience, and user research in his designs. He has worked with small and large teams as well as a freelancer and enjoys the challenge of solving user problems. He always delivers on time and on budget.</p>
                                            <h3>Constantin Buda</h3>
                                            <h4>CMO at Vidalico Digital</h4>
                                            <h4>Hubspot Agency Partner</h4>
                                            <h4>SicTic Member</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12 wow slideInRight" data-wow-delay="0.3s">
                                    <div className="review-item">
                                        <div className="review-img">
                                            <img src={require("../img/review-1.jpg")} alt="M" />
                                        </div>
                                        <div className="review-text">
                                            <p className='text-start'>
                                                Ali is a creative product designer. You will find a lot of artists with too busy layouts and art forms. But Ali takes a lead in impressive yet simple and relevant product designs. He has this cunning ability to solve complex problem with simple solutions using his design skills. His arts speaks visually, does the job perfectly and leaves a long lasting impression. I've worked with Ali in past and it was truly a fun experience. Would love to do that again and I highly recommend Ali too.</p>
                                            <h3>Fahad M</h3>
                                            <h4>IT Contractor</h4>
                                            <h4>Travelodge Hotels Limited</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BackToTopButton />
                    <Footer />

                </div>
            </div>
        );
    }
}

export default App;
