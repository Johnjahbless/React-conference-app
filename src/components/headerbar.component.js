import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Headerbar extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
            <div id="preloader">
        <div class="loader"></div>
    </div>
   
   
    <header class="header-area">
        <div class="classy-nav-container breakpoint-off">
            <div class="container">
               
                <nav class="classy-navbar justify-content-between" id="conferNav">

                   
                    <Link class="nav-brand" to="/"><img src="./img/core-img/logo.png" alt=""/></Link>

                    
                    <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    
                    <div class="classy-menu">
                        
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                       
                        <div class="classynav">
                            <ul id="nav">
                                <li class="active"><Link to="/">Home</Link></li>
                               
                                <li><Link to="/speakers">Speakears</Link></li>
                                <li><Link to="/schedule">Schedule</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>

                           
                            <a href="/tickets" class="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>
            )
        }
    }