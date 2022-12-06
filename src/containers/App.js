
import './App.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Reachme from '../components/ReachMe/Reachme';

import { useInView } from 'react-intersection-observer';

function App() {

  const { ref: heroRef, inView: isHeroInView } = useInView();

  return (
    <div className='App'>

      {/* //////////////////    HEADER / HERO */}
      <div className='section-head' id='skills'>
          <Header stickHeader={isHeroInView} />
          
          <div className='section-hero'>
            <Hero heroRef={heroRef} stickHeader={isHeroInView} />
          </div>
      </div>


      {/* //////////////////    PROJECTS */}
      <div className='section-projects' id='projects'>
          <Projects />
      </div>


      {/* //////////////////    REACH ME */}
      <div className='section-reachme' id='reachme'>
          <Reachme />
      </div>


    </div>

  );
}

export default App;
