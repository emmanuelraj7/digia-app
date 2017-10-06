import React from 'react';
import logo from './images/logo.png';


const Header = () => {
    return (
        <nav className="navbar navbar-default main">
         <div>   
        <a href="/" className="navbar-brand"><img className="logo" src={logo} alt="text"></img></a>
         </div>  
         <div className="container-fluid">
        </div>
        </nav>  
    );
};

export default Header;