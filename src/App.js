import React, { useState, useRef } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import GitHubIcon from '@material-ui/icons/GitHub';
import ScrollAnimation from 'react-animate-on-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Navbar from './components/Navbar';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import About from './components/About';
import './App.css';

const PIC_SIZE = 400;

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const toggleOpen = () => setContactOpen(!contactOpen);
  const formRef = useRef(null);
  const matches = useMediaQuery('(min-width:1200px)');

  const onContactClick = () => {
    toggleOpen();
    if (!contactOpen) {
      setTimeout(() => {
        window.scroll({
          behaviour: 'smooth',
          left: 0,
          top: formRef.current.offsetTop
        });
      },300);
    }
  };

  return (
    <div>
      <Navbar />
      {/* Welcome */}
      <div className="jumbotron cover bg-light text-center d-flex flex-column align-items-center">
        <div className="container my-auto welcome">
          <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce>
            <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
              <h1>Hey, I'm Jinmo.</h1>
            </ScrollAnimation>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce>
            <ScrollAnimation animateIn="fadeInLeft" duration={2.7} animateOnce>
              <h1 className='text-muted'>Welcome to my portfolio!</h1>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
        <div className='more-arrow'>
          <a href='#projects'>
            <ExpandMoreIcon style={{ fontSize: 50 }} />
          </a>
        </div>
        <img 
          className='welcome-character mb-auto'
          alt='welcome character'
          src={matches 
              ? 'https://user-images.githubusercontent.com/55267729/78927655-1c5e3900-7a54-11ea-900c-2b7417bcc41a.png'
              : 'https://user-images.githubusercontent.com/55267729/79062532-116ff800-7c50-11ea-88cc-691687ffe3ad.png'
          }
        />
      </div>

      <div className='container'>
        {/* Projects -----------------------------------------------------------------*/}
          <h2 id='projects' className='section-heading'>
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
              <span style={{opacity: 0.3}}></span> 
              &nbsp;PROJECTS&nbsp;
              <span style={{opacity: 0.3}}><PlayArrowIcon/></span> 
            </ScrollAnimation>
          </h2>
          <hr />

          {/* Widdy */}
          <Project 
            title='Widdy'
            tags={['React', 'Redux', 'Node.js', 'Express.js', 'SASS']}
            body={<div>A visual environment for users to create and share widgets. Currently just
                  an experiment but you can check out its current progress at the links above. 
                  Inspired by <a href='https://cycling74.com/products/max/' target='_blank' rel="noopener noreferrer">
                  Max</a>.</div>}
            urls={['https://widdy.herokuapp.com/', 'https://github.com/Jinmo-K/Widdy']}
            url_labels={['DEMO', <GitHubIcon/>]}
            img_src={'https://user-images.githubusercontent.com/55267729/80406560-1c926d00-8879-11ea-8d1b-8126ac5ff796.png'}
            img_size={PIC_SIZE}
          />
          <hr/>
          
          {/* PracTrack */}
          <Project 
            title='PracTrack'
            tags={['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'socket.io', 'Chart.js']}
            body='Created a web app for users to track time spent on activities and skills
                  using the MERN stack. Learned quite a bit about full-stack development
                  as this was my first solo web project. I personally use it for fitness 
                  and keeping logs of work hours. More details on the GitHub page!'
            urls={['https://practrack.herokuapp.com/', 'https://github.com/Jinmo-K/PracTrack']}
            url_labels={['DEMO', <GitHubIcon/>]}
            img_src={'https://user-images.githubusercontent.com/55267729/78829138-ae097000-799a-11ea-9beb-8d178bd94de5.png'}
            img_size={PIC_SIZE}
            reverse
          />
          <hr />
          {/* CHS */}
          <Project 
            title='Campground Reservations v1 & v2'
            tags={['Python', '', 'Rails', 'PostgreSQL', 'React', 'Redux']}
            body="Last summer I was asked to work remotely for my old workplace by
                  taking care of their reservations. They process all reservations manually and 
                  working remotely made the job even more tedious so I took the opportunity to learn
                  Python and made an OOP app with a Tkinter UI to automate most of the process, 
                  including: scraping of the forms using Selenium, creation of PDFs, and e-mailing 
                  confirmations. This helps me get the work done about 3x faster. I'm currently 
                  working on a web app version using React and Rails for future employees to use."
            urls={['https://github.com/Jinmo-K/CHS']}
            url_labels={[<GitHubIcon/>]}
            img_src={'https://user-images.githubusercontent.com/55267729/78968395-5150a700-7ab9-11ea-941c-9f23d92aca79.png'}
            img_size={PIC_SIZE}
          />
          <hr />

          {/* TeamJS 2 */}
          <Project 
            title='Code Repository Analyzer'
            tags={['D3.js', 'Javascript', 'CSS']}
            body='For our second project in CPSC410, we were asked to
                  create a visualization for our analysis of a code repository. Our team
                  used lexical analysis to look at the complexity of the code modules
                  in order to help developers make their refactoring decisions. I made the
                  graph and sorting/sizing nodes features using D3.js.'
            urls={['https://teamjs2.herokuapp.com/']}
            url_labels={['DEMO']}
            img_src={'https://user-images.githubusercontent.com/55267729/78821223-fcfcd880-798d-11ea-9fbd-8f1ec3098dbe.png'}
            img_size={PIC_SIZE}
            reverse
          />
          <hr />

          {/* TeamJS */}
          <Project 
            title='Animation DSL'
            tags={['GSAP', 'Javascript', 'CSS']}
            body={<div>
                    In a group of five in CPSC410 at UBC, we were tasked with creating
                    a domain-specific language. Our team made a language that allows users
                    to create animations using just code, with the original intention
                    of providing kids with a fun way of learning to program. I played a role in 
                    all parts of the project, including tokenizing, parsing, designing the
                    AST and grammar, as well as interfacing with the &nbsp;
                    <a href='https://greensock.com/gsap/' target='_blank' rel="noopener noreferrer">
                     GSAP</a> animation library.
                  </div>
                  }
            urls={['https://teamjs.herokuapp.com/']}
            url_labels={['DEMO']}
            img_src={'https://user-images.githubusercontent.com/55267729/78820204-3fbdb100-798c-11ea-950e-8562594cfce9.png'}
            img_size={PIC_SIZE}
          />
          <hr />

          {/* EOG */}
          <Project 
            title='EOG REM Detection'
            tags={['Max', 'Arduino', 'Electronics']}
            body={<div>
                    Created a sleeping mask to detect REM using an Arduino,
                    filtering circuits, and an accelerometer. Fed the 
                    data wirelessly into <a href='https://cycling74.com/products/max/' target='_blank' rel="noopener noreferrer">
                    Max</a>, where I made a program to further process, analyze 
                    and take snapshots of the data.
                  </div>
                  }
            img_src={'https://user-images.githubusercontent.com/55267729/78857156-7a9c0500-79dd-11ea-9afb-6a97aad5c99b.png'}
            img_size={PIC_SIZE}
            reverse
          />
      </div>

      {/* About Me */}
      <About onContactClick={onContactClick} />

      {/* Contact */}
      <div className='container mt-2'>
        <Collapse in={contactOpen} collapsedHeight={0} timeout={200} ref={formRef}>
          <Fade in={contactOpen} timeout={400}>
            <ContactForm contactOpen={contactOpen} />
          </Fade>
        </Collapse>
      </div>
      <footer className="container pb-3" >
        <hr />
        <span className="float-right">
          <a href="#">Back to top <ExpandLessIcon/></a>
        </span>
        <span>© 1992 JK</span>
      </footer>
    </div>
  );
}

export default App;
