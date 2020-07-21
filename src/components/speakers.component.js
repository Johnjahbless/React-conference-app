import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Speakers extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
           <>
<section class="breadcrumb-area bg-img bg-gradient-overlay jarallax" style={{backgroundImage: "url(img/bg-img/27.jpg)"}}>
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcrumb-content">
                        <h2 class="page-title">speakars</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">speakars</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="our-speaker-area section-padding-100">
        <div class="container">
            <div class="row">
            
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/9.jpg" alt=""/>
                        </div>
                       
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div class="speaker-info">
                            <h5>Michael Fowler</h5>
                            <p>Product Design</p>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="more-speaker-btn text-center mt-20 wow fadeInUp" data-wow-delay="300ms">
                        <a class="btn confer-btn" href="#/">View All Speaker <i class="zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
           </>
            )
        }
    }