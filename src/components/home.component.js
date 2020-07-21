import React, { Component } from 'react';
//import { Link } from 'react-router-dom';



export default class Reseachers extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
            <section class="welcome-area">
        <div class="welcome-slides owl-carousel">
           
            <div class="single-welcome-slide bg-img bg-overlay jarallax" style={{backgroundImage: "url(img/bg-img/1.jpg);"}}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        
                        <div class="col-12">
                            <div class="welcome-text text-right">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Science <br/>Conference</h2>
                                <h6 data-animation="fadeInUp" data-delay="500ms">Shangri-La Hotel, Bangkok, Bangkok, Thailand</h6>
                                <div class="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                    <a href="#/" class="btn confer-btn">More Information <i class="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="single-welcome-slide bg-img bg-overlay jarallax" style={{backgroundImage: "url(img/bg-img/45.jpg);"}}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                       
                        <div class="col-12">
                            <div class="welcome-text-two text-center">
                                <h5 data-animation="fadeInUp" data-delay="100ms">The event consistently</h5>
                                <h2 data-animation="fadeInUp" data-delay="300ms">OSHA Compliance</h2>
                                
                                <div class="event-meta" data-animation="fadeInUp" data-delay="500ms">
                                    <a class="event-date" href="#/"><i class="zmdi zmdi-account"></i> January 14, 2019</a>
                                    <a class="event-author" href="#/"><i class="zmdi zmdi-alarm-check"></i> Laura Green</a>
                                </div>
                                <div class="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                    <a href="#/" class="btn confer-btn m-2">View more <i class="zmdi zmdi-long-arrow-right"></i></a>
                                    <a href="#/" class="btn confer-btn m-2">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        <div class="icon-scroll" id="scrollDown"></div>
        
    </section>
    
    <section class="about-us-countdown-area section-padding-100-0" id="about">
        <div class="container">
            <div class="row align-items-center">
                
                <div class="col-12 col-md-6">
                    <div class="about-content-text mb-80">
                        <h6 class="wow fadeInUp" data-wow-delay="300ms">About Conference</h6>
                        <h3 class="wow fadeInUp" data-wow-delay="300ms">Welcome to the Project Management</h3>
                        <p class="wow fadeInUp" data-wow-delay="300ms">The Project Management is a platform to learn expert techniques for building successful project teams, creating efficient plans and implementing effective tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced, well-designed day, we’ll cover all the essential elements of project management.</p>
                        <a href="#/" class="btn confer-btn mt-50 wow fadeInUp" data-wow-delay="300ms">Interested <i class="zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                </div>

                
                <div class="col-12 col-md-6">
                    <div class="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="countdown-up-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-3">
                       
                        <div class="countdown-content-text mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <h6>Conference Date</h6>
                            <h4>Count Every Second Until the Event</h4>
                        </div>
                    </div>

                    <div class="col-12 col-md-9">
                        <div class="countdown-timer mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <div id="clock"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="our-speaker-area bg-img bg-gradient-overlay section-padding-100-60" style={{backgroundImage: "url(img/bg-img/3.jpg)"}}>
        <div class="container">
            <div class="row">
               
                <div class="col-12">
                    <div class="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Speakings</p>
                        <h4>Who’s speaking</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/4.jpg" alt=""/>
                        </div>
                        
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                       
                        <div class="speaker-info">
                            <h5>Albert Barnes</h5>
                            <p>Founder</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                       
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/5.jpg" alt=""/>
                        </div>
                        
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div class="speaker-info">
                            <h5>Patricia Stanley</h5>
                            <p>Product Lead</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                       
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/6.jpg" alt=""/>
                        </div>
                        
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div class="speaker-info">
                            <h5>Evelyn Stone</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/7.jpg" alt=""/>
                        </div>
                        
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div class="speaker-info">
                            <h5>Evelyn Stone</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="speaker-single-thumb">
                            <img src="img/bg-img/8.jpg" alt=""/>
                        </div>
                       
                        <div class="social-info">
                            <a href="#/"><i class="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i class="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i class="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i class="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div class="speaker-info">
                            <h5>Susan Hopkins</h5>
                            <p>UX Manager</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
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
                    <div class="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <a class="btn confer-btn-white" href="#/">view all Speaker <i class="zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="our-schedule-area section-padding-100">
        <div class="container">
            <div class="row">
                
                <div class="col-12">
                    <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Timetable</p>
                        <h4>Schedule Plan</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="schedule-tab">
                        
                        <ul class="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="monday-tab" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true">Monday <br/> <span>January 14, 2019</span></a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" id="tuesday-tab" data-toggle="tab" href="#step-two" role="tab" aria-controls="step-two" aria-expanded="true">Tuesday <br/> <span>January 15, 2019</span></a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" id="wednesday-tab" data-toggle="tab" href="#step-three" role="tab" aria-controls="step-three" aria-expanded="true">Wednesday <br/> <span>January 16, 2019</span></a>
                            </li>
                        </ul>
                    </div>

                    
                    <div class="tab-content" id="conferScheduleTabContent">
                        <div class="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                           
                            <div class="single-tab-content">
                                <div class="row">
                                    <div class="col-12">
                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/10.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Dealing with Difficult People</h6>
                                                    <p>by <span>Gary Armstrong</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                               
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/11.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Crop Insurance Conference</h6>
                                                    <p>by <span>Amanda Hudson</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                       
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/12.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Capdm Executive Conference</h6>
                                                    <p>by <span>Martha Burke</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                              
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                           
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                  
                                    <div class="col-12">
                                        <div class="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" class="btn confer-gb-btn">Dowload schedule (Pdf)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
                            
                            <div class="single-tab-content">
                                <div class="row">
                                    <div class="col-12">
                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                            
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/11.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Crop Insurance Conference</h6>
                                                    <p>by <span>Amanda Hudson</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/12.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Capdm Executive Conference</h6>
                                                    <p>by <span>Martha Burke</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                       
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                               
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                               
                                                <div class="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    
                                    <div class="col-12">
                                        <div class="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" class="btn confer-gb-btn">Dowload schedule (Pdf)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
                            
                            <div class="single-tab-content">
                                <div class="row">
                                    <div class="col-12">
                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/10.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Dealing with Difficult People</h6>
                                                    <p>by <span>Gary Armstrong</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div class="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div class="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div class="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                                
                                                <div class="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div class="schedule-time-place">
                                                <p><i class="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i class="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <a href="#/" class="btn confer-btn">View More <i class="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                   
                                    <div class="col-12">
                                        <div class="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" class="btn confer-gb-btn">Dowload schedule (Pdf)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="our-ticket-pricing-table-area bg-img bg-gradient-overlay section-padding-100-0 jarallax" style={{backgroundImage: "url(img/bg-img/14.jpg);"}}>
        <div class="container">
            <div class="row">
                
                <div class="col-12">
                    <div class="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Choose a Ticket</p>
                        <h4>Ticket Pricing</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="col-12 col-lg-4">
                    <div class="single-ticket-pricing-table text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 class="ticket-plan">1 day pass</h6>
                        
                        <div class="ticket-icon">
                            <img src="img/core-img/p1.png" alt=""/>
                        </div>
                        <h2 class="ticket-price"><span>$</span>59</h2>
                        <a href="#/" class="btn confer-btn w-100 mb-30">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                       
                        <div class="ticket-pricing-table-details">
                            <p><i class="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i class="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i class="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i class="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i class="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

               
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-ticket-pricing-table active text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 class="ticket-plan">Full pass</h6>
                        
                        <div class="ticket-icon">
                            <img src="img/core-img/p2.png" alt=""/>
                        </div>
                        <h2 class="ticket-price"><span>$</span>99</h2>
                        <a href="#/" class="btn confer-btn w-100 mb-30">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                        
                        <div class="ticket-pricing-table-details">
                            <p><i class="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i class="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i class="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i class="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i class="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-ticket-pricing-table text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 class="ticket-plan">Group pass</h6>
                        
                        <div class="ticket-icon">
                            <img src="img/core-img/p3.png" alt=""/>
                        </div>
                        <h2 class="ticket-price"><span>$</span>199</h2>
                        <a href="#/" class="btn confer-btn w-100 mb-30">Get Tickets <i class="zmdi zmdi-long-arrow-right"></i></a>
                        
                        <div class="ticket-pricing-table-details">
                            <p><i class="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i class="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i class="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i class="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i class="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section class="our-sponsor-client-area section-padding-100">
        <div class="container">
            <div class="row">
                
                <div class="col-12">
                    <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Partners &amp; Sponsors</p>
                        <h4>OFFICIAL SPONSOR</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    
                    <div class="our-sponsor-area d-flex flex-wrap">
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-1.png" alt=""/></a>
                        </div>
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-2.png" alt=""/></a>
                        </div>
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-3.png" alt=""/></a>
                        </div>
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-4.png" alt=""/></a>
                        </div>
                       
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-5.png" alt=""/></a>
                        </div>
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-6.png" alt=""/></a>
                        </div>
                       
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-7.png" alt=""/></a>
                        </div>
                        
                        <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-8.png" alt=""/></a>
                        </div>
                    </div>
                </div>

                
                <div class="col-12">
                    <div class="our-client-area mt-100 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="client-area owl-carousel">
                            
                            <div class="single-client-content">
                                
                                <div class="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div class="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div class="single-client-thumb">
                                            <img src="img/bg-img/15.jpg" alt=""/>
                                        </div>
                                        
                                        <div class="client-info">
                                            <h6>Maria Hernandez</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="client-icon">
                                    <i class="zmdi zmdi-quote"></i>
                                </div>
                            </div>

                            
                            <div class="single-client-content">
                               
                                <div class="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div class="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div class="single-client-thumb">
                                            <img src="img/bg-img/16.jpg" alt=""/>
                                        </div>
                                        
                                        <div class="client-info">
                                            <h6>Jacqueline Myers</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="client-icon">
                                    <i class="zmdi zmdi-quote"></i>
                                </div>
                            </div>

                            
                            <div class="single-client-content">
                                
                                <div class="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div class="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div class="single-client-thumb">
                                            <img src="img/bg-img/15.jpg" alt=""/>
                                        </div>
                                        
                                        <div class="client-info">
                                            <h6>Maria Hernandez</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="client-icon">
                                    <i class="zmdi zmdi-quote"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="our-blog-area bg-img bg-gradient-overlay section-padding-100-60" style={{backgroundImage: "url(img/bg-img/17.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-12">
                   
                    <div class="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Blog</p>
                        <h4>Latest news</h4>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="single-blog-thumb">
                            <img src="img/bg-img/18.jpg" alt=""/>
                        </div>
                        <div class="single-blog-text text-center">
                            <a class="blog-title" href="#/">Street Food Convention</a>
                            
                            <div class="post-meta">
                                <a class="post-date" href="#/"><i class="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                <a class="post-author" href="#/"><i class="zmdi zmdi-account"></i> Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div class="blog-btn">
                            <a href="#/"><i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

               
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="single-blog-thumb">
                            <img src="img/bg-img/19.jpg" alt=""/>
                        </div>
                        <div class="single-blog-text text-center">
                            <a class="blog-title" href="#/">Tedx Moscow Conference</a>
                           
                            <div class="post-meta">
                                <a class="post-date" href="#/"><i class="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                <a class="post-author" href="#/"><i class="zmdi zmdi-account"></i>Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div class="blog-btn">
                            <a href="#/"><i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div class="single-blog-thumb">
                            <img src="img/bg-img/20.jpg" alt=""/>
                        </div>
                        <div class="single-blog-text text-center">
                            <a class="blog-title" href="#/">Los Angeles Institute</a>
                            
                            <div class="post-meta">
                                <a class="post-date" href="#/"><i class="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                <a class="post-author" href="#/"><i class="zmdi zmdi-account"></i>Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div class="blog-btn">
                            <a href="#/"><i class="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    

    
    <section class="contact-our-area section-padding-100-0">
        <div class="container">
            <div class="row">
                
                <div class="col-12">
                    <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Have Question?</p>
                        <h4>Contact us</h4>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between">
                <div class="col-12 col-sm-3">
                    <div class="contact-information mb-100">
                        
                        <div class="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Address:</p>
                            <h6>184 Main Collins Street</h6>
                        </div>
                        
                        <div class="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Phone:</p>
                            <h6>(226) 446 9371</h6>
                        </div>
                        
                        <div class="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Email:</p>
                            <h6>confer@gmail.com</h6>
                        </div>
                        
                        <div class="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Website:</p>
                            <h6>www.confer.com</h6>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-8">
                    
                    <div class="contact_from_area mb-100 clearfix wow fadeInUp" data-wow-delay="300ms">
                        <div class="contact_form">
                            <form >
                                <div class="contact_input_area">
                                    <div id="success_fail_info"></div>
                                    <div class="row">
                                        
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="name" id="name" placeholder="Your Name"/>
                                            </div>
                                        </div>
                                       
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="name" id="name2" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                      
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="email" class="form-control mb-30" name="email" id="email" placeholder="E-mail"/>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control mb-30" name="subject" id="subject" placeholder="Your Number"/>
                                            </div>
                                        </div>
                                       
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control mb-30" id="message" cols="30" rows="6" placeholder="Your Message *"></textarea>
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
    </>
            )
        }
    }