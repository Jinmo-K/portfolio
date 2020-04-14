import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const Project = ({ title, tags, body, urls=[], url_labels, img_src, img_size, reverse }) => {
  const displayTools = () => {
    return tags.map(tag => {
      return (
        <div className='tool mr-2 mb-1 d-inline-block' key={tags.indexOf(tag)}>
          {tag}
        </div>
      );
    });
  };

  const displayLinks = () => {
    return urls.map((url, index) => {
      return (
        <a 
          href={url} 
          target='_blank' 
          rel="noopener noreferrer"
          className='text-muted mx-2' 
          style={{fontSize: '0.8rem'}} 
          key={index}
        >
          {url_labels[index]}
        </a>
      );
    });
  };

  return (
    <div className='row my-5 py-5 align-items-center'>
      {/* Info */}
      <div className={reverse ? 'col-md-7 order-md-2' : 'col-md-7'}>
        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>  
          <h2 className='project-heading mb-3'>
            {title} {displayLinks()}
          </h2>
          <div className='mb-2'>
            {displayTools()}
          </div>
          <div className='project-body mt-4'>
            {body}
          </div>
        </ScrollAnimation>
      </div>

      {/* Photo */}
      <div className={reverse ? 'col-md-5 order-md-1 mx-auto ml-md-0 pt-4 pt-md-0' : 'col-md-5 mx-auto mr-md-0 pt-4 pt-md-0'}>
        {img_src
        && <ScrollAnimation 
            animateIn={reverse ? 'fadeInLeft' : 'fadeInRight'}
            duration={2} 
            animateOnce
           >
              <div className="filter"></div>
              <img 
                className={reverse ? 'card img-fluid mx-auto ml-md-0' : 'card img-fluid mx-auto mr-md-0'}
                alt={title}
                src={img_src}
                width={img_size}
                height={img_size}
              />
           </ScrollAnimation>
        }
      </div>
    </div>
  );
};

export default Project;