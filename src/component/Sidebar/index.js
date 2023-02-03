import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/letterN.png'
import LogoSubtitle from '../../assets/images/namelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEnvelope, faHome, faSmileBeam, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (

    <div className='nav-bar'>
<Link className = 'logo' to= '/'>
    <img src= {LogoS} alt ="logo" />
    <img className = 'sub-logo'src= {LogoSubtitle} alt ="NICK"/>
</Link>
<nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

<ul>
    <li>
        <a target="_blank"
        rel='noreferrer'
        href='https://www.linkedin.com/in/erick-berre-5332b71b7/'
        >
            <FontAwesomeIcon icon = {faLinkedin} color = "4d4d43"/>

        </a>
    </li>
    <li>
        <a target="_blank"
        rel='noreferrer'
        href='https://github.com/BarkingAxe'
        >
            <FontAwesomeIcon icon = {faGithub} color = "4d4d43"/>

        </a>
    </li>
    <li>
        <a target="_blank"
        rel='noreferrer'
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        >
            <FontAwesomeIcon icon = {faSmileBeam} color = "4d4d43"/>

        </a>
    </li>
</ul>

    </div>
)

export default Sidebar