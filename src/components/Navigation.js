import {Link} from 'react-router-dom'
import logo from '../images/Discord-logo.png'
import logo_black from '../images/Discord-Logo-Black.png'
import './Navigation.css'
import {GoThreeBars} from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';
import {ImCross} from 'react-icons/im'
import {RiArrowRightSLine} from 'react-icons/ri'
import { useState } from 'react';
const Navigation = ()=>{
    const [menu,setMenu] = useState(false)
    
    const showMenu = ()=>{
        setMenu(!menu)
    }

    return(
        <div className='header'>
            <header className='laptop'>
                <Link to='/'><img src={logo} alt='logo'></img></Link>
                    <ul className='text-link'>
                        <Link to='/download'>Download</Link>
                        <Link to='/'>Nitro</Link>
                        <Link to='/'>Safety</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Careers</Link>
                    </ul>
                <Link to='/' className='btn-login'>Login</Link>
            </header>
            <header className='tablet'>
                <Link to='/'><img src={logo} alt='logo'></img></Link>
                <div className='ham-menu'>
                    <Link to='/' className='btn-login'>Login</Link>
                    <GoThreeBars className='go-icon' onClick={showMenu}/>
                </div>
                <div className={menu ? 'show-backdrop' : 'backdrop'}></div>
                <div className={menu ? 'show-panel': 'panel'}>
                    <div className='side-bar'>
                        <div className='side-bar-icon'>
                            <img src={logo_black} alt='logo-black'></img>
                            <ImCross onClick={showMenu} />
                        </div>
                        <div className='bars'></div>
                        <div className='nav-side-bar'>
                            <Link to='/'>Home</Link>
                            <Link to='/download'>Download</Link>
                            <Link to='/'>Nitro</Link>
                            <Link to='/'>Safety <RiArrowRightSLine/></Link>
                            <Link to='/'>Mod Academy <RiArrowRightSLine/></Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Careers</Link>
                            </div>
                        <div className='bottom-panel'>
                            <button><FiDownload/>Download for Windows</button>
                        </div>
                    </div>
                </div>
            </header>
            
        </div> 
    )
}
export default Navigation