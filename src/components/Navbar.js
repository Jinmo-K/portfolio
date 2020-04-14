import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen 
                    ? 'navbar navbar-light p-0 navbar-expand-sm sticky-top w-100 bg-white'
                    : 'navbar navbar-light p-0 navbar-expand-sm sticky-top w-100'
    }>
      <div className='container'>
        <span className='nav-btn navbar-brand ml-1 mt-1'>JINMO KIM</span>
        <button className='navbar-toggler' type='button' onClick={toggleOpen}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item mr-5'>
              <a href='#projects' className='nav-a nav-btn pb-0'>
                Projects
              </a>
            </li>
            <li className='nav-item mr-5'>
              <a href='#about' className='nav-a nav-btn pb-0'>
                About me 
              </a>
            </li>
            <li className='nav-item mr-0'>
              <a href='https://jinmo-resume.s3-us-west-2.amazonaws.com/resume-pdf.html' 
                 target="_blank"
                 className='nav-a nav-btn pb-0'
              >
                Resume
              </a>
            </li>
          </ul>

        </div>
      </div>
      {/* Dropdown menu for xs */}
      {isOpen &&
        <div className='d-block d-sm-none w-100 pt-2 bg-white position-absolute dropdown-nav'>
          <Collapse in={isOpen} collapsedHeight={0} timeout={200}>
            <Fade in={isOpen} timeout={400}>
              <div className='pl-4 pr-2 mb-2'>
                <ul className='navbar-nav'>
                  <li className='nav-item mr-2'>
                    <a href='#projects' className='nav-a nav-btn pb-0 float-right' onClick={toggleOpen}>
                      Projects
                    </a>
                  </li>
                  <span className="border float-right my-2"></span>
                  <li className='nav-item'>
                    <a href='#about' className='nav-a nav-btn pb-0 float-right' onClick={toggleOpen}>
                      About me
                    </a>
                  </li>
                  <span className="border float-right my-2"></span>
                  <li className='nav-item'>
                    <a href='https://jinmo-resume.s3-us-west-2.amazonaws.com/resume-pdf.html' 
                      target="_blank"
                      className='nav-a nav-btn pb-0 float-right' 
                      onClick={toggleOpen}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </Collapse>
        </div>
      }
    </div>
  );
}

export default Navbar;
