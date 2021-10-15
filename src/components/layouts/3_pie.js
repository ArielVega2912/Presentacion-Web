import Contacto from '../contacto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Pie = () =>{
    return(
        
        <>
        <Contacto/>
        <div id='redes'>
            <a href="https://github.com/ArielVega2912" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/arielvega2912" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://wa.link/5nhhp4" target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </div>
        </>

    )
}

export default Pie;

