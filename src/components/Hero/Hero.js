
import React from 'react';
import './Hero.css';

import Skills from '../Skills/Skills';

import boycoder from '../../assets/boycoder.png';

function Hero(props) {
  return (
    <div className='hero' style={{ paddingTop: !props.stickHeader ? '9.8rem' : '0' }}>

        <div className='hero-textbox'>
          <h1 className='heading-primary'>Hi, i'm Micheal</h1>
          <p>A full stack software engineer. I develop javaScript driven web interfaces with React & Redux for state management. Express NodeJS for server-side applications and business logics.</p>
          <p ref={props.heroRef} >
            An AWS cloud developer. I deploy applications to amazon ec2 instances, maintain security standards with aws virtual private cloud (VPC), host apps on kubernetes clusters and configure application to 
            AWS services like dynamo db, s3 buckets, and more.
          </p>
          <div className='profession-pills margin-top-sm'>
            <button className='btn btn--pill'>Backend</button>
            <button className='btn btn--pill'>AWS Cloud</button>
            <button className='btn btn--pill'>Frontend</button>
          </div>
          
          <Skills />
        </div>

        
        <div className='hero-imgbox'>
            <img src={boycoder} alt='vector art of boy coding'/>
        </div>

    </div>
  )
}

export default Hero;