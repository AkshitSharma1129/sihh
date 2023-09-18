import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return ( 
        <footer>
      <div className="footer__container">
        <div className="footer__items__container">
          <div className="footer__help__container">
            <div className="footer__contact__container">
              <h1 className='small-text'>EduConnect</h1>
            </div>
            <ul className="fotter__help__links">
              <li className="help__link small-text">Accessibility</li>
              <li className="help__link small-text">Refund</li>
              <li className="help__link small-text">FAQ</li>
            </ul>
          </div>
          <div className="footer__contact__container">
            <div className="footer__contact__header">
              <h1 className="small-text">Contact Us</h1>
            </div>
            <ul className="footer__contacts">
              <li className="footer__contact small-text">
                <LocalPhoneIcon /> <span>+123123123</span>
              </li>
              <li className="footer__contact small-text">
                <EmailIcon /> <span>edu.connect@gmail.com</span>
              </li>
              <li className="footer__contact small-text">
                <LocationOnIcon /> <span>chandigarh</span>
              </li>
            </ul>
          </div>
          <div className="footer__social__link__container">
            <div className="footer__social__link__header">
              <h1 className="small-text">Stay Connected</h1>
            </div>
            <ul className="footer__social__links">
              <li className="social__link">
                <TwitterIcon />
              </li>
              <li className="social__link">
                <InstagramIcon />
              </li>
              <li className="social__link">
                <YouTubeIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;