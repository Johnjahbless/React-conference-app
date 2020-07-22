import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Footerbar extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">
        
        <div className="main-footer-area">
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                            
                            <Link to="/" className="footer-logo"><img src="img/core-img/logo.png" alt=""/></Link>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain.</p>

                            
                            <div className="social-info">
                                <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                                <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                                <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                   
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                           
                            <h5 className="widget-title">Contact</h5>

                            
                            <div className="footer-contact-info">
                                <p><i className="zmdi zmdi-map"></i> 184 Main Collins Street</p>
                                <p><i className="zmdi zmdi-phone"></i> (226) 446 9371</p>
                                <p><i className="zmdi zmdi-email"></i> confer@gmail.com</p>
                                <p><i className="zmdi zmdi-globe"></i> www.confer.com</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                           
                            <h5 className="widget-title">Workshops</h5>

                            
                            <ul className="footer-nav">
                                <li><a href="#/">OSHA Compliance</a></li>
                                <li><a href="#/">Microsoft Excel Basics</a></li>
                                <li><a href="#/">Forum Speaker Series</a></li>
                                <li><a href="#/">Tedx Moscow Conference</a></li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                            
                            <h5 className="widget-title">Gallery</h5>

                           
                            <div className="footer-gallery">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="img/bg-img/21.jpg" className="single-gallery-item"><img src="img/bg-img/21.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="img/bg-img/22.jpg" className="single-gallery-item"><img src="img/bg-img/22.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="img/bg-img/23.jpg" className="single-gallery-item"><img src="img/bg-img/23.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="img/bg-img/24.jpg" className="single-gallery-item"><img src="img/bg-img/24.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="img/bg-img/25.jpg" className="single-gallery-item"><img src="img/bg-img/25.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="img/bg-img/26.jpg" className="single-gallery-item"><img src="img/bg-img/26.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container">
            <div className="copywrite-content">
                <div className="row">
                <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>Copyright &copy;2020 All rights reserved </p>
                        </div>
                    </div>
                   
                   
                    <div className="col-12 col-md-6">
                        <div className="footer-menu">
                            <ul className="nav">
                                <li><Link to="/"><i className="zmdi zmdi-circle"></i> Terms of Service</Link></li>
                                <li><Link to="/"><i className="zmdi zmdi-circle"></i> Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
            )
        }
    }