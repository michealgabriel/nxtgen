
import React from 'react';

import './Skills.css';

import js from '../../assets/techs/js.png';
import css from '../../assets/techs/css.png';
import git from '../../assets/techs/git.png';
import html from '../../assets/techs/html.png';
import node from '../../assets/techs/node.png';
import react from '../../assets/techs/react.png';
import ts from '../../assets/techs/ts.png';
import responsive from '../../assets/techs/responsive.png';
import aws from '../../assets/techs/aws.png';

function Skills() {
  return (
    <div className='skills grid grid--3-cols'>
        <div className='skill-card'>
            <img src={js} alt='javascript logo' className='skill-icon' />
            <span>Javascript</span>
        </div>

        <div className='skill-card'>
            <img src={css} alt='css logo' className='skill-icon' />
            <span>CSS 3</span>
        </div>

        <div className='skill-card'>
            <img src={html} alt='html logo' className='skill-icon' />
            <span>HTML 5</span>
        </div>

        <div className='skill-card'>
            <img src={react} alt='react logo' className='skill-icon' />
            <span>React</span>
        </div>
        
        <div className='skill-card'>
            <img src={node} alt='node js logo' className='skill-icon' />
            <span>Node JS</span>
        </div>

        <div className='skill-card'>
            <img src={git} alt='git logo' className='skill-icon' />
            <span>Git</span>
        </div>
        
        <div className='skill-card'>
            <img src={ts} alt='typescript logo' className='skill-icon' />
            <span>Typescript</span>
        </div>

        <div className='skill-card'>
            <img src={responsive} alt='responsive logo' className='skill-icon' />
            <span>Responsive Design</span>
        </div>

        <div className='skill-card'>
            <img src={aws} alt='aws logo' className='skill-icon' />
            <span>AWS Cloud</span>
        </div>
    </div>
  )
}

export default Skills;