import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import BlogList from './BlogList';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';
import SocialMeida from '../generic/SocialMedia';

class App extends React.Component {
    state = {
        showAdditionalContent: false,
        showHideButton: false
    };

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    toggleAdditionalContent = () => {
        this.setState(prevState => ({
            showAdditionalContent: !prevState.showAdditionalContent,
            showHideButton: true
        }));
    };

    toggleHideContent = () => {
        this.setState(prevState => ({
            showAdditionalContent: !prevState.showAdditionalContent,
            showHideButton: false
        }));
    };
    render() {
        // Date Publish
        const dateOfPublish = '16-08-2023';

        return (
            <div>
                <TopNavGeneric />
                <div className="blog01" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                        <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>It's blogging time!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='blog-width m-5-xl m-5-lg m-1-xs m-1-sm mx-auto'>
                        <h4 className='primary-title'>Suggesting the implementation of a transparency mandate for the hiring procedure</h4>
                        <BlogAuthor datePublished={dateOfPublish} />

                        <div className='quoteContainer mb-5'>
                            <q className='mb-4'>
                                Enhancing transparency isn't just about processes; it's about crafting a seamless journey that empowers job seekers and employers. Verifying job posts and applicants adds security, while a unified platform fosters accessibility and efficient hiring. Together, we aim for purposeful professional journeys, fueled by continuous improvement and personalized growth
                            </q>
                            <p className='quoteLine'>
                                Ali
                            </p>
                        </div>
                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>Hiring process</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <p>
                                The idea behind this is not to solely make some processes more transparent, but also a way to improve the experience for both job seekers and the employers by creating  a seamless experience.
                            </p>
                            <p>
                                Additionally, it's crucial to establish a method for verifying both the job posting and the applicant to filter out the scams and enhance overall security.
                            </p>
                            <div className='text-center mb-5 mt-5'>
                                <div className='bg-image'>
                                    <img className='w-100' src={require('../img/blog/hiring-process/hiring-process.jpg')} style={{ width: '100%' }} alt='Hiring' />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>Framwork</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <div className='mb-5'>
                                <h4>
                                    Permission from Te-Office:
                                </h4>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        <img className='w-100 rounded' src={require('../img/blog/hiring-process/Permission.png')} style={{ width: '100%' }} alt='Framwork' />
                                    </div>
                                </div>
                                <p>
                                    Text
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h4>
                                    Candidates Qualifications:
                                </h4>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        <img className='w-100 rounded' src={require('../img/blog/hiring-process/Candidates.png')} style={{ width: '100%' }} alt='Framwork' />
                                    </div>
                                </div>
                                <p>
                                    Text
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h4>
                                    First Interview:
                                </h4>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        <img className='w-100 rounded' src={require('../img/blog/hiring-process/Interview-1.png')} style={{ width: '100%' }} alt='Framwork' />
                                    </div>
                                </div>
                                <p>
                                    Text
                                </p>
                            </div>
                        </section>

                        <SocialMeida />

                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="text-center mt-5">More Posts</h3>
                                    <div className="titleUnderLine mb-4"></div>
                                </Col>
                            </Row>
                            <BlogList idsToShow={[1, 2, 3]} style={{ fontSize: '60%' }} />
                        </Container>
                    </div>

                </div>
                <BackToTopButton />
                <Footer />
            </div>

        );
    }
}

export default App;
