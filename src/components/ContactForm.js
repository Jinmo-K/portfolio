import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Collapse from '@material-ui/core/Collapse';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const ContactForm = ({ contactOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({name: '', email: '', message: ''});
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const resetErrors = () => {
    setErrors({name: '', email: '', message: ''});
  };

  const onChange = (e, field) => {
    e.preventDefault();
    resetErrors();
    switch (field) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
    }
  };

  const validateFields = () => {
    // Name non-empty
    let nameError = name ? '' : "Please enter your name"
    // Email valid
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailError = reg.test(email) ? '' : "Please enter a valid e-mail"
    // Message non-empty
    let messageError = message ? '' : "Please enter a message";
    setErrors({
      name: nameError, 
      email: emailError, 
      message: messageError
    });
    return nameError || emailError || messageError;
  };
  
  const onSubmit = () => {
    setSending(true);
    if (!validateFields()) {
      let data = {
        name,
        email,
        message
      }
      axios.post('https://7j2c985rcg.execute-api.us-west-2.amazonaws.com/prod/contact-me', data, {
          headers: {
            'Content-Type': 'application/json',
            'domain': window.location.origin
          }
        })
        .then(res => {
          setMessageSent(true);
          resetErrors();
          setName('');
          setEmail('');
          setMessage('');
          setSending(false);
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        }, err => {
          setSending(false);
          alert('Sorry, there was an error. Please try again');
        });
    }
    else {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!contactOpen) {
      resetErrors();
    }
  }, [contactOpen])
  
  return (
    <div>
      <h2 id='about' className='section-heading mx-auto pt-3'>
        CONTACT&nbsp;
        <span style={{ opacity: 0.3 }}><SkipNextIcon /></span>
      </h2>
      <hr />
      <Collapse in={messageSent}>
        <div className='lead mt-3 about-body text-center'>
          <CheckCircleOutlineIcon style={{color:'green'}} />&nbsp;
          Message sent successfully. I'll get back to you as soon as I can!
        </div>
      </Collapse>
      <form method="post" className='py-4 mx-auto contact-form'>
        <div className='form-group'>
          <TextField
            label='Name'
            helperText={errors.name}
            error={errors.name !== ''}
            fullWidth
            variant='outlined'
            size='small'
            value={name}
            onChange={(e) => onChange(e, 'name')}
          />
        </div>
        <div className='form-group'>
          <TextField
            label='Email'
            helperText={errors.email}
            error={errors.email !== ''}
            type='email'
            fullWidth
            size='small'
            variant='outlined'
            value={email}
            onChange={(e) => onChange(e, 'email')}
          />
        </div>
        <div className='form-group'>
          <TextField
            label='Type message here'
            helperText={errors.message}
            error={errors.message !== ''}
            multiline
            fullWidth
            rows={5}
            variant='outlined'
            value={message}
            onChange={(e) => onChange(e, 'message')}
          />
        </div>
        <button
          type="button"
          onClick={onSubmit}
          className="btn btn-secondary w-100 project-heading"
          style={{fontSize: '1rem'}}
        >
          {sending ? 'SENDING...' : 'SEND'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;