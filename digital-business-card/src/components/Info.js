import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import person from '../assets/images/person.jpg';

function Info() {
    return(
        <header>
            <div className="img-box">
                <img src={person} className="profile-img" />
            </div>
            <div className="profile-info">
                <h1>Betania Van Holig</h1>
                <p className='profile-role'>Salesforce Architect</p>
                <p className='profile-descritption'>certified Salesforce dev</p>
            </div>
            <div className="btn-inline-group">
                <button className='mail'><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className='linkedin'><FontAwesomeIcon icon={faLinkedin} /> linkedin</button>
            </div>
        </header>
    );
}

export default Info;