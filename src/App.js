import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Portfolio from "./pages/Portfolio";
import Jobseeking from "./portfolio/Jobseeking";
import Collaboration from "./portfolio/Collaboration";

import Blog from "./pages/Blog";
import Blog01 from "./blogs/Blog01";
import Blog02 from "./blogs/Blog02";
import Blog03 from "./blogs/Blog03";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                { /* Standard metadata tags */}
                <title>CV Lanes | Landing Page</title>
                <meta name="description" content="Professional Product Designer" />
                { /* End standard metadata tags */}
                { /* Facebook tags */}
                <meta property="og:type" content={'Landing Page'} />
                <meta property="og:title" content={'CV Lanes | Landing Page'} />
                <meta property="og:description" content={'Professional Product Designer'} />
                <meta property='og:url' content='https://cvlanes.com/' />
                <meta property="og:image" content='https://cvlanes.com/img/ali.png' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={'Ali Zuhairi'} />
                <meta name="twitter:card" content={'Landing Page'} />
                <meta name="twitter:title" content={'CV Lanes | Landing Page'} />
                <meta name="twitter:description" content={'Professional Product Designer'} />
                { /* End Twitter tags */}
              </Helmet>
              <Home />
            </>
          } />

          <Route path="/portfolio" element={
            <>
              <Helmet>
                <title>Portfolio</title>
                <meta name="description" content="Where Magic Happens" />
              </Helmet>
              <Portfolio />
            </>
          } />

          <Route path="/portfolio/jobseeking" element={
            <>
              <Helmet>
                <title>Job Seeking Application</title>
                <meta name="description" content="Job Seeking Application" />
                <meta name="type" content="blog" />
                <meta name="url" content="https://cvlanes.com/portfolio/jobseeking" />
                <meta property="og:image" content='https://cvlanes.com/img/jobseeking/jobseeking-cover.jpeg' />
                <meta property="og:image:width" content='1200' />
                <meta property="og:image:height" content='630' />
                <meta name="image:alt" content="Job Seeking Application" />
              </Helmet>
              <Jobseeking />
            </>
          } />

          <Route path="/portfolio/collaboration" element={
            <>
              <Helmet>
                <title>Collaboration Workflow Platform</title>
                <meta name="description" content="Collaboration Workflow Platform" />
                <meta name="type" content="blog" />
                <meta name="url" content="https://cvlanes.com/portfolio/collaboration" />
                <meta property="og:image" content='https://cvlanes.com/img/jobseeking/jobseeking-cover.jpeg' />
                <meta property="og:image:width" content='1200' />
                <meta property="og:image:height" content='630' />
                <meta name="image:alt" content="Collaboration Workflow Platform" />
              </Helmet>

              <Collaboration />
            </>
          } />

          <Route path="/blog" element={
            <>
              <Helmet>
                <title>Blog</title>
                <meta name="description" content="To Blog... or not to Blog" />
                <meta property='og:type' content='blog' />
                <meta property='og:url' content='https://cvlanes.com/blog' />
                <meta property="og:image" content='https://cvlanes.com/img/blog-cover.jpeg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta name='image:alt' content="Blog" />
              </Helmet>

              <Blog />
            </>
          } />

          <Route path="/blogs/circle-of-rhythm" element={
            <>
              <Helmet>
                <title>Circle of Daily Rhythm</title>
                <meta name="description" content="The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day." />
                <meta name="type" content="blog" />
                <meta name="url" content="https://cvlanes.com/blogs/circle-of-rhythm" />
                <meta name="image" content="https://cvlanes.com/img/circle-daily-rhythm.jpg" />
                <meta name="image:width" content="1200" />
                <meta name="image:height" content="630" />
                <meta name="image:alt" content="Circle of Rhythm" />
              </Helmet>

              <Blog01 />
            </>
          } />

          <Route path="/blogs/ios-notifications" element={
            <>
              <Helmet>
                <title>How to get notifications on iOS with personal focus on?</title>
                <meta name="description" content="How to get notifications on iOS with personal focus on?" />
                <meta name="type" content="blog" />
                <meta name="url" content="https://cvlanes.com/blogs/circle-of-rhythm" />
                <meta property="og:image" content='https://cvlanes.com/img/iphone-mail-notifications.jpg' />
                <meta property="og:image:width" content='1200' />
                <meta property="og:image:height" content='630' />
                <meta name="image:alt" content="How to get notifications on iOS with personal focus on?" />
              </Helmet>

              <Blog02 />
            </>
          } />

          <Route path="/blogs/premitive-human" element={
            <>
              <Helmet>
                <title>Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication</title>
                <meta name='description' content="Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication" />
                <meta property='og:title' content="Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication" />
                <meta property='og:description' content="Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication" />
                <meta property='og:type' content='article' />
                <meta property='og:url' content='https://cvlanes.com/blogs/premitive-human' />
                <meta property='og:image' content='https://cvlanes.com/img/blog/Human-AI/human-AI-jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta name='image:alt' content="Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication" />
              </Helmet>

              <Blog03 />
            </>
          } />

        </Routes>
      </>
    </HelmetProvider>
  );
}

export default App;
