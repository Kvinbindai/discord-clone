import discord1 from '../images/discord1.svg'
import discord2 from '../images/discord2.svg'
import discord3 from '../images/discord3.svg'
import discord4 from '../images/discord4.svg'
import discord5 from '../images/discord5.svg'
import discord6 from '../images/discord6.svg'
import effect from '../images/effect.svg'
import { FiDownload } from 'react-icons/fi'

import './Home.css'
const Home = ()=>{
    return(
        <div className="container">
            <div className="content-1">
                <img src={discord1} alt='left-corner' className='img-left'></img>
                <div className="text-content-1">
                    <h2>IMAGINE A PLACE...</h2>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community.
                    Where just you and a handful of friends can spend time together. A place that makes it easy
                    to talk every day and hang out more often.</p>
                    <div className="btn-container">
                        <button className='left-btn'><FiDownload/>Download for Windows</button>
                        <button className='right-btn'>Open Discord in your browser</button>
                    </div>
                </div>
                <img src={discord2} alt='right-corner' className='img-right'></img>
            </div>
            <div className='content-2'>
                <img src={discord3} alt='img-content2'></img>
                <div className='text-content-2'>
                    <h2>Create an invite-only place where you belong</h2>
                    <p>Discord servers are organized into topic-based channels where you can collaborate,
                    share, and just talk about your day without clogging up a group chat.
                    </p>
                </div>
            </div>
            <div className='content-3'>
                <div className='text-content-3'>
                    <h2>Where hanging out is easy</h2>
                    <p>Grab a seat in a voice channel when you're free. Friends in your server can see 
                    you're around and instantly pop in to talk without having to call.
                    </p>
                </div>
                <img src={discord4} alt='img-content3'></img>
            </div>
            <div className='content-4'>
                <img src={discord5} alt='img-content4'></img>
                <div className='text-content-4'>
                    <h2>From few to a fandom</h2>
                    <p>Get any community running with moderation tools and custom member access. 
                       Give members special powers, set up private channels, and more.
                    </p>
                </div>
            </div>
            <div className='content-5'>
                <div className='text-content-5'>
                    <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
                    <p>Low-latency voice and video feels like you're in the same room. Wave hello over video, 
                    watch friends stream their games, or gather up and have a drawing session with screen share.
                    </p>
                </div>
                <img src={discord6} alt='img-content5'></img>
                <div className='btn-content-5'>
                    <img src={effect} alt='effect'></img>
                    <h2>Ready to start your journey?</h2>
                    <button><FiDownload className='icon'/>Download for Windows</button>
                </div>
            </div>
        </div>
        
    )
}
export default Home