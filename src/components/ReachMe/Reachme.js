import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoMail, IoCall } from 'react-icons/io5';
import './Reachme.css';

function Reachme() {
  return (
    <div className='reachme'>
        <h2 className='heading-tertiary'>Reach Me</h2>
        <hr/>

        <div className='reachme-icons'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/micheal-gabriel/'><IoLogoLinkedin className='reachme-icon' /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/michealgabriel'><IoLogoGithub className='reachme-icon' /></a>
            <a target='_blank' rel='noreferrer' href='mailto:mikedgab@gmail.com'><IoMail className='reachme-icon' /></a>
            <a target='_blank' rel='noreferrer' href='tel:07043017567'><IoCall className='reachme-icon' /></a>
        </div>

    </div>
  )
}

export default Reachme;