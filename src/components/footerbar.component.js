import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Footerbar extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <footer class="footer-area bg-img bg-overlay-2 section-padding-100-0">
        
        <div class="main-footer-area">
            <div class="container">
                <div class="row">
                    
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                            
                            <Link to="/" class="footer-logo"><img src="img/core-img/logo.png" alt=""/></Link>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain.</p>

                            
                            <div class="social-info">
                                <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                                <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                                <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                                <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                   
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                           
                            <h5 class="widget-title">Contact</h5>

                            
                            <div class="footer-contact-info">
                                <p><i class="zmdi zmdi-map"></i> 184 Main Collins Street</p>
                                <p><i class="zmdi zmdi-phone"></i> (226) 446 9371</p>
                                <p><i class="zmdi zmdi-email"></i> confer@gmail.com</p>
                                <p><i class="zmdi zmdi-globe"></i> www.confer.com</p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                           
                            <h5 class="widget-title">Workshops</h5>

                            
                            <ul class="footer-nav">
                                <li><a href="#/">OSHA Compliance</a></li>
                                <li><a href="#/">Microsoft Excel Basics</a></li>
                                <li><a href="#/">Forum Speaker Series</a></li>
                                <li><a href="#/">Tedx Moscow Conference</a></li>
                            </ul>
                        </div>
                    </div>

                    
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">
                            
                            <h5 class="widget-title">Gallery</h5>

                           
                            <div class="footer-gallery">
                                <div class="row">
                                    <div class="col-4">
                                        <a href="img/bg-img/21.jpg" class="single-gallery-item"><img src="img/bg-img/21.jpg" alt=""/></a>
                                    </div>
                                    <div class="col-4">
                                        <a href="img/bg-img/22.jpg" class="single-gallery-item"><img src="img/bg-img/22.jpg" alt=""/></a>
                                    </div>
                                    <div class="col-4">
                                        <a href="img/bg-img/23.jpg" class="single-gallery-item"><img src="img/bg-img/23.jpg" alt=""/></a>
                                    </div>
                                    <div class="col-4">
                                        <a href="img/bg-img/24.jpg" class="single-gallery-item"><img src="img/bg-img/24.jpg" alt=""/></a>
                                    </div>
                                    <div class="col-4">
                                        <a href="img/bg-img/25.jpg" class="single-gallery-item"><img src="img/bg-img/25.jpg" alt=""/></a>
                                    </div>
                                    <div class="col-4">
                                        <a href="img/bg-img/26.jpg" class="single-gallery-item"><img src="img/bg-img/26.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="container">
            <div class="copywrite-content">
                <div class="row">
                   
                   
                   
                    <div class="col-12 col-md-6">
                        <div class="footer-menu">
                            <ul class="nav">
                                <li><Link o="/terms"><i class="zmdi zmdi-circle"></i> Terms of Service</Link></li>
                                <li><Link to="/services"><i class="zmdi zmdi-circle"></i> Privacy Policy</Link></li>
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