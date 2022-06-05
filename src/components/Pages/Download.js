import './Download.css'
import { FiDownload } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import download1 from '../../images/download1.svg'
import ios from '../../images/ios-download.svg'
import android from '../../images/android-download.svg'
import linux from '../../images/linux-download.svg'
import mac from '../../images/mac-download.svg'
import { useState } from 'react'
const Download = ()=>{
    const [showLinuxList,setShowLinuxList] = useState(false)
    const activeLinux =()=>{
        setShowLinuxList(!showLinuxList)
    }
    return(
        <div className='download-container'>
            <div className='download-1'>
                <div className='text-download'>
                    <h2>GET DISCORDFOR ANY DEVICE</h2>
                    <p>An adventure awaits. Hang out with your friends on our desktop app
                        and keep the conversation going on mobile.</p>
                    <div className='button-container'>
                        <button className='btn-download'><FiDownload className='icon'/>Download for Windows</button>
                        <p>Windows 7 or higher</p>
                    </div>
                </div>
                <img src={download1} alt='download1'></img>
            </div>
            <div className='download-2'>
                <div className='download-col1'>
                    <div className='ios'>
                        <h2>iOS</h2>
                        <button className='btn'>Download</button>
                        <img src={ios} alt='ios'></img>
                    </div>
                    <div className='linux'>
                        <h2>Linux</h2>
                        <button className='btn' onClick={activeLinux}>Download<FaChevronDown/></button>
                        <ul className={showLinuxList ? 'list active' : 'list'}>
                            <li>deb</li>
                            <li>tra.gz</li>
                        </ul>
                        <img src={linux} alt='linux'></img>
                    </div>
                    <div className='text-content'>
                        <h2>Feeling experimental?</h2>
                        <p>Try our Public Test Build and test new features before they launch.</p>
                        <button className='btn'>Download Public Test Build<FaChevronDown/></button>
                    </div>
                </div>
                <div className='download-col2'>
                    <div className='android'>
                        <h2>Android</h2>
                        <button className='btn'>Download</button>
                        <img src={android} alt='android'></img>
                    </div>
                    <div className='mac'>
                        <h2>Mac</h2>
                        <button className='btn'>Download</button>
                        <img src={mac} alt='mac'></img>
                    </div>
                </div>
            </div>
            <div className='mobile-col'>
                <div className='ios'>
                        <h2>iOS</h2>
                        <button className='btn'>Download</button>
                        <img src={ios} alt='ios'></img>
                </div>
                <div className='android'>
                        <h2>Android</h2>
                        <button className='btn'>Download</button>
                        <img src={android} alt='android'></img>
                </div>
                <div className='linux'>
                        <h2>Linux</h2>
                        <button className='btn' onClick={activeLinux}>Download<FaChevronDown/></button>
                        <ul className={showLinuxList ? 'list active' : 'list'}>
                            <li>deb</li>
                            <li>tra.gz</li>
                        </ul>
                        <img src={linux} alt='linux'></img>
                </div>
                <div className='mac'>
                        <h2>Mac</h2>
                        <button className='btn'>Download</button>
                        <img src={mac} alt='mac'></img>
                </div>
                <div className='text-content'>
                        <h2>Feeling experimental?</h2>
                        <p>Try our Public Test Build and test new features before they launch.</p>
                        <button className='btn'>Download Public Test Build</button>
                </div>
            </div>
        </div>
    )
}
export default Download 