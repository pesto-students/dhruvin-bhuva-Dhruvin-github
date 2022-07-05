import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Outlet, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

toast.configure();

export const Header = () => {

    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <h1>Shortly</h1>
                </div>

                <nav className='navbar'>
                    {/* <a href='#'>Features</a> */}
                     <Link to="/features">Features</Link>
                     <Link to="/pricing">Pricing</Link>
                     <Link to="/pricing">Pricing</Link>
                    {/* <a href='#'>Resources</a> */}
                </nav>

                <div className='routes'>
                    <a href='#'>Longin</a>
                    <a href='#'>Sign Up</a>
                </div>
            </header>
        </>
    )

}


export const MainSection = () => {

    const [inputUrl, setInputUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [labelUrl, setLabeltUrl] = useState('');

    const inputEvent = (event) => {
        setInputUrl(event.target.value);

        setShortUrl('');
        setLabeltUrl('');

    }

    const shortenUrl = () => {
        debugger
        if (inputUrl === '') {
            toast.warning('Please Enter Url', { autoClose: 1000 })
            setShortUrl('');
        }
        else {
            var url = `https://api.shrtco.de/v2/shorten?url=${inputUrl}`;

            axios.get(url)
                .then((res) => {
                    if (res.data) {
                        setLabeltUrl(inputUrl);
                        setShortUrl(res.data.result.short_link);
                    } else {
                        setShortUrl('');
                    }
                })
                .catch((res) => {
                    toast.error('Invalid Input URL', { autoClose: 2000 })
                    setShortUrl('');
                })
        }
    }

    const saveUrl = () => {
        if (shortUrl !== '') {
            navigator.clipboard.writeText(shortUrl)
            toast.info('Url Copied!', { autoClose: 1000 })
        }
        else {
            toast.warning('Please Generate a Url!', { autoClose: 1000 })
        }


    }
    return (
        <>
            <div className='mainSection'>
                <h1>More than just shorter Links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className='inputSection'>
                    <input type='text' placeholder='Shorten a link here...' onChange={inputEvent} className="inputText"></input>
                    <button onClick={shortenUrl} className="inputButton">Shorten it!</button>
                </div>

                <div className='outputSection'>
                    <div className='border'>
                        <div className='url'>
                            {labelUrl}
                        </div>
                        <div className='showUrl'>
                            {shortUrl}
                            <button className='copyButton' onClick={saveUrl}>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-logo'><h1>Shortly</h1></div>
                <div className='footer-links'>
                    <div>
                        <h3>Features</h3>
                        <p>Link Shortning</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>Blogs</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Our Team</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='footer-routes'>
                    <p>Login</p>
                    <p>Sign up</p>
                </div>
            </footer>
        </>
    )
}