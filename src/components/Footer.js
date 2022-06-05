import { FaTwitter,FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import logo from '../images/Discord-logo.png'
import './Footer.css'
const Footer = ()=>{
    return(
        <div className="footer">           
            <div className='footer-1'>
                <div className='contact'>
                    <h2>IMAGINE A PLACE</h2>
                    <select>
                        <option>English,USA</option>
                        <option>ไทย</option>
                    </select>
                    <div className='icon-contact'>
                        <Link to='/'><FaTwitter/></Link> 
                        <Link to='/'><FaInstagram/></Link> 
                        <Link to='/'><FaFacebook/></Link> 
                        <Link to='/'><FaYoutube/></Link> 
                    </div>
                </div>
                <div className='spacing'></div>
                <div className='footer-content'>
                    <ul className='product'>
                        <p>Product</p>
                        <Link to='/download'>Download</Link>
                        <Link to='/'>Nitro</Link>
                        <Link to='/'>Status</Link>
                    </ul>
                <ul className='company'>
                        <p>Company</p>
                        <Link to='/'>About</Link>
                        <Link to='/'>Jobs</Link>
                        <Link to='/'>Branding</Link>
                        <Link to='/'>Newsroom</Link>
                </ul>
                <ul className='resources'>
                        <p>Resources</p>
                        <Link to='/'>College</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Safety</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Feedback</Link>
                        <Link to='/'>Developers</Link>
                        <Link to='/'>StreamKit</Link>
                </ul>
                <ul className='policies'>
                        <p>Policies</p>
                        <Link to='/'>Terms</Link>
                        <Link to='/'>Privacy</Link>
                        <Link to='/'>Cookie Settings</Link>
                        <Link to='/'>Guidelines</Link>
                        <Link to='/'>Acknowledgements</Link>
                        <Link to='/'>Licenses</Link>
                        <Link to='/'>Moderation</Link>
                </ul>
                </div>
            </div>
            <div className='footer-2'>
                <div className='bars'></div>
                <div className='content'>
                    <Link to='/'><img src={logo} alt='logo'></img></Link>
                    <button className='btn-footer'>Sign up</button>
                </div>
            </div>
        </div>
    )
}
export default Footer