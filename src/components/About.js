import React from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ScrollAnimation from 'react-animate-on-scroll';

const About = ({ onContactClick }) => {
  return (
    <div id='about' className="jumbotron bg-light mb-0">
      <div className="container">
        <h2 id='about' className='section-heading'>
          <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
            &nbsp;ABOUT ME&nbsp;
            <span style={{ opacity: 0.3 }}><PauseIcon /></span>
          </ScrollAnimation>
        </h2>
        <hr />
        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
          <div className='row text-center text-muted project-heading skills'>
            <div className='col-sm-3'>PYTHON</div>
            <div className='col-sm-3'>JAVASCRIPT</div>
            <div className='col-sm-3'>MACHINE LEARNING</div>
            <div className='col-sm-3'>WEB DEV</div>
          </div>
        </ScrollAnimation>
        <div className='lead mt-5 about-body text-center'>
          <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce>
            <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
              Spring 2020 UBC graduate with a major in computer science and minor in music.
              Interests include IoT, data science, AI, automation, and building useful applications. Besides
              coding I enjoy playing instruments, music production, snowboarding, and fitness.<br /><br />
              <span className='thanks'> Thanks for dropping by!</span>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
        <div className='row align-items-center'>
          <div className='col-3'>
            <img
              className='about-character'
              alt='about character'
              src='https://user-images.githubusercontent.com/55267729/78943107-f34ba180-7a6f-11ea-9ee7-57a0d9d35c44.gif'
            />
          </div>
          <div className='col-3 text-center contact-link'>
            <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce>
              <a
                href='https://github.com/Jinmo-K'
                rel="noopener noreferrer"
                target='_blank'
                className='my-social-link'
              >
                <GitHubIcon style={{ fontSize: 40 }} />
              </a>
            </ScrollAnimation>
          </div>
          <div className='col-3 text-center contact-link'>
            <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce>
              <a
                href='https://www.linkedin.com/in/jinmo-kim/'
                rel="noopener noreferrer"
                target='_blank'
                className='my-social-link'
              >
                <LinkedInIcon style={{ fontSize: 40 }} />
              </a>
            </ScrollAnimation>
          </div>
          <div className='col-3 text-center'>
            <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce>
              <button
                className='my-social-link contact-btn'
                onClick={onContactClick}
                style={{ cursor: 'pointer' }}
              >
                <EmailIcon style={{ fontSize: 40 }} />
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;