import React, {useEffect, useRef, useState} from 'react';
import { RelatedMap } from '@rsuite/icons';
import './Projects.css';

function Projects() {

    const shouldFetchProjects = useRef(true);
    const [isFetchingProjects, setIsFetchingProjects] = useState(false);
    const [projectsData, setprojectsData] = useState([]);

    const [filterValue, setFilterValue] = useState('all');

    const getProjectsData = () => {

        if(shouldFetchProjects.current){
            shouldFetchProjects.current = false; // Needed this because React strict mode mounts components twice on init lifecycle

            setIsFetchingProjects(true); // Notify state of json fetching status

            fetch('projects.json', {    // Called from public directory
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(myJson => {
                // console.log(myJson);

                setprojectsData(myJson.projects);
                setIsFetchingProjects(false);
            }); 
        }
    }

    useEffect(() => {
        // console.log('useEffect is called');
        getProjectsData();
    }, []);

  return (
    <div className='projects'>

        <div className='projects-headbar'>
            <h3 className='heading-tertiary'>Projects</h3>

            <div className='filters'>  
                <button className='btn btn--outline-inverted' onClick={() => setFilterValue('all')}>All</button>
                <button className='btn btn--outline-inverted' onClick={() => setFilterValue('frontend')}>Frontend</button>
                <button className='btn btn--outline-inverted' onClick={() => setFilterValue('fullstack-cloud')}>Fullstack & Cloud</button>
            </div>
        </div>
        <hr/>

        { 
        isFetchingProjects ? <div className='center-text margin-top-md'><RelatedMap pulse style={{fontSize: '6.4rem'}} /></div> 
        :
        <div className='project-cards grid grid--3-cols margin-top-md'>

            {
                projectsData.filter((project) => {
                    if(filterValue === 'all') return true;
                    if(filterValue === 'frontend') return project.tag === 'frontend';
                    if(filterValue === 'fullstack-cloud') return project.tag === 'fullstack-cloud';
                    return false;
                }).map(project => {
                    return (
                        <div className='project-card' key={project.id}>
                            <img src={`projectimages/${project.image}`} alt='project screenshot' />
            
                            <span className='project-title'>{project.name}</span>
            
                            <div className='project-info'>
                                <h3 className='heading-tertiary'>{project.name}</h3>
                                <p>{project.description}</p>
                                <div>
                                    {!project.gitrepo == '' ? <a href={project.gitrepo} target='_blank' rel='noreferrer' className='btn btn--outline hovered-state margin-right-sm'>Source Code</a> : null }
                                    <a href={project.preview} target='_blank' rel='noreferrer' className='btn btn--outline'>Preview</a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }

        </div>
        }
    </div>
  )
}

export default Projects;