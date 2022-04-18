import LogoS from '../../assets/images/letterN.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'


const Home = () => {
  const[letterClass,setLetterClass] = useState('text-animate'); // text-animate with usestate
  const nameArray=['i','c','k',','];
  const jobArray=['a',' ','d','e','v','e','l','o','p','e','r'];
  const hiArray=['H','e','l','l','o',' ','W','o','r','l','d'];
  const imArray=['I','\'','m'];
// thes are the letters that will be animated


useEffect(()=>{
  return setTimeout(()=>{
    setLetterClass('text-animate-hover')
  },4000)
},[])
  return (
    <div className="container home-page">
     <div className="text-zone">
    
         <br/>

         <h1>
         <AnimatedLetters 
         letterClass={letterClass} 
         strArray={hiArray} 
         idx={1}/>
            <br/>
            <AnimatedLetters 
         letterClass={letterClass} 
         strArray={imArray} 
         idx={12}/>
         <img src={LogoS} alt="developer"/>
         <AnimatedLetters 
         letterClass={letterClass} 
         strArray={nameArray} 
         idx={15}/>
         <br/>
         <AnimatedLetters 
         letterClass={letterClass} 
         strArray={jobArray} 
         idx={19}/>
         </h1>
         <h2>Interested in learning full stack technologies</h2>
         <Link to='/contact' className='flat-button'>CONTACT ME</Link>
     </div>
     <Logo/>
    </div>
  );
}
export default Home;