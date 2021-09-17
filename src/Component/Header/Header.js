import React from 'react';
import logo from '../../images/coursera.svg'
import './Header.css'


const Header = () => {
    return (
        
            <div className="header">
                <img src={logo} alt=""/>
                <nav>
                <a href="/sengineering">Software Engineering</a>
                <a href="/webdevelopment">Web Development</a>
                <a href="/datascience">Data Science</a>
                </nav>
            </div>
            
       
    );
};

export default Header;