import './Navigation-bar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <><div className="navbar-parent-div">
            <div className="left-side-child-of-navbar"></div>
            <div className="center-child-of-navbar">
                <p className="home-button">HOME</p>
                <p className="features-button">FEATURES</p>
                <p className="teachers-button">TEACHERS</p>
            </div>
            <div className="right-side-child-of-navbar">
                <p className="user-circle-logo"></p>
                <p className="features-and-login-text">FEATURES | LOGIN</p>
                <p className="lang-button">LANG</p>
                <p className="kiwi-flag"></p>
                <p className="maori-flag"></p>
            </div>
        </div></>
    )
}