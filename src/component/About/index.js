import { faGithub, faHtml5, faJava, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const About = () => {
    
    const[letterClass,setLetterClass] = useState('text-animate'); 
    
    useEffect(()=>{
        return setTimeout(()=>{
          setLetterClass('text-animate-hover')
        },3000)
      },[])



    return(

        <div className="container about-page">
        <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'B', 'O', 'U', 'T',' ','M','E']}
                    idx= {15}
                    />
                </h1>
                <p>Hi am Nick. My current role is SQL Conversion Dev. I am familiar with the ETL process. </p>
                <p>My current skills include SQL,Java, and I am currently learing full stack technologies </p>
              
            </div>
            <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNode} color= '#87c7f7'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color= '#87c7f7'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faHtml5} color= '#87c7f7'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faGithub} color= '#87c7f7'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color= '#87c7f7'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color= '#87c7f7'/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;