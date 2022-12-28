import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faTwitter,faFacebook,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer className='footer-icons'>
            <button><FontAwesomeIcon icon={faTwitter}/></button>
            <button><FontAwesomeIcon icon={faFacebook}/></button>
            <button><FontAwesomeIcon icon={faInstagram}/></button>
            <button><FontAwesomeIcon icon={faGithub}/></button>
        </footer>
    );
}

export default Footer;