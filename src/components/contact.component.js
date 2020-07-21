import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Contact extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
<section class="breadcrumb-area bg-img bg-gradient-overlay jarallax" style={{backgroundImage: "url(img/bg-img/37.jpg)"}}>
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcrumb-content">
                        <h2 class="page-title">Contact</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="contact--us-area section-padding-100-0">
        <div class="container">
            <div class="row">
               
                <div class="col-12 col-lg-6">
                    <div class="contact-us-thumb mb-100">
                        <img src="img/bg-img/44.jpg" alt=""/>
                    </div>
                </div>

                
                <div class="col-12 col-lg-6">
                    <div class="contact_from_area mb-100 clearfix">
                        
                        <div class="contact-heading">
                            <h4>Contact us</h4>
                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae</p>
                        </div>
                        <div class="contact_form">
                            <form >
                                <div class="contact_input_area">
                                    <div class="row">
                                       
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="name" id="name" placeholder="Your Name" required/>
                                            </div>
                                        </div>
                                       
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="name" id="name-2" placeholder="Last Name" required/>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control mb-30" name="email" id="email" placeholder="E-mail" required/>
                                            </div>
                                        </div>
                                       
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="subject" id="subject" placeholder="Your Number"/>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control mb-30" id="message" cols="30" rows="6" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12">
                                            <button type="submit" class="btn confer-btn">Send Message <i class="zmdi zmdi-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div class="map-area">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8521.851236327686!2d-74.6724533513314!3d40.961125464236446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c371b215154515%3A0xb2dc3766c77b480b!2sHopatcong%2C+NJ%2C+USA!5e0!3m2!1sen!2sbd!4v1552471083596" allowfullscreen></iframe>
    </div>

    
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contact--info-area bg-boxshadow">
                    <div class="row">
                        
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="single-contact--info text-center">
                               
                                <div class="contact--info-icon">
                                    <img src="img/core-img/icon-5.png" alt=""/>
                                </div>
                                <h5>184 Main Collins Street</h5>
                            </div>
                        </div>

                        
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="single-contact--info text-center">
                                
                                <div class="contact--info-icon">
                                    <img src="img/core-img/icon-6.png" alt=""/>
                                </div>
                                <h5>(226) 446 9371</h5>
                            </div>
                        </div>

                        
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="single-contact--info text-center">
                               
                                <div class="contact--info-icon">
                                    <img src="img/core-img/icon-7.png" alt=""/>
                                </div>
                                <h5>confer@gmail.com</h5>
                            </div>
                        </div>

                       
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="single-contact--info text-center">
                               
                                <div class="contact--info-icon">
                                    <img src="img/core-img/icon-8.png" alt=""/>
                                </div>
                                <h5>www.confer.com</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
            )
        }
    }