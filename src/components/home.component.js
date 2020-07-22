import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Reseachers extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
            <section className="welcome-area">
        <div className="welcome-slides owl-carousel">
           
            <div className="single-welcome-slide bg-img bg-overlay jarallax" style={{backgroundImage: "url(img/bg-img/1.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        
                        <div className="col-12">
                            <div className="welcome-text text-right">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Science <br/>Conference</h2>
                                <h6 data-animation="fadeInUp" data-delay="500ms">Shangri-La Hotel, Bangkok, Bangkok, Thailand</h6>
                                <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                    <a href="#/" className="btn confer-btn">More Information <i className="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="single-welcome-slide bg-img bg-overlay jarallax" style={{backgroundImage: "url(img/bg-img/45.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                       
                        <div className="col-12">
                            <div className="welcome-text-two text-center">
                                <h5 data-animation="fadeInUp" data-delay="100ms">The event consistently</h5>
                                <h2 data-animation="fadeInUp" data-delay="300ms">OSHA Compliance</h2>
                                
                                <div className="event-meta" data-animation="fadeInUp" data-delay="500ms">
                                    <a className="event-date" href="#/"><i className="zmdi zmdi-account"></i> January 14, 2019</a>
                                    <a className="event-author" href="#/"><i className="zmdi zmdi-alarm-check"></i> Laura Green</a>
                                </div>
                                <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                    <a href="#/" className="btn confer-btn m-2">View more <i className="zmdi zmdi-long-arrow-right"></i></a>
                                    <Link to="/tickets" className="btn confer-btn m-2">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="icon-scroll" id="scrollDown"></div>
        
    </section>
    
    <section className="about-us-countdown-area section-padding-100-0" id="about">
        <div className="container">
            <div className="row align-items-center">
                
                <div className="col-12 col-md-6">
                    <div className="about-content-text mb-80">
                        <h6 className="wow fadeInUp" data-wow-delay="300ms">About Conference</h6>
                        <h3 className="wow fadeInUp" data-wow-delay="300ms">Welcome to the Project Management</h3>
                        <p className="wow fadeInUp" data-wow-delay="300ms">The Project Management is a platform to learn expert techniques for building successful project teams, creating efficient plans and implementing effective tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced, well-designed day, we’ll cover all the essential elements of project management.</p>
                        <Link to="/tickets" className="btn confer-btn mt-50 wow fadeInUp" data-wow-delay="300ms">Interested <i className="zmdi zmdi-long-arrow-right"></i></Link>
                    </div>
                </div>

                
                <div className="col-12 col-md-6">
                    <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="countdown-up-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-3">
                       
                        <div className="countdown-content-text mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <h6>Conference Date</h6>
                            <h4>Count Every Second Until the Event</h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-9">
                        <div className="countdown-timer mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <div id="clock"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="our-speaker-area bg-img bg-gradient-overlay section-padding-100-60" style={{backgroundImage: "url(img/bg-img/3.jpg)"}}>
        <div className="container">
            <div className="row">
               
                <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Speakers</p>
                        <h4>Who’s speaking</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/4.jpg" alt=""/>
                        </div>
                        
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                       
                        <div className="speaker-info">
                            <h5>Albert Barnes</h5>
                            <p>Founder</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                       
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/5.jpg" alt=""/>
                        </div>
                        
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div className="speaker-info">
                            <h5>Patricia Stanley</h5>
                            <p>Product Lead</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                       
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/6.jpg" alt=""/>
                        </div>
                        
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div className="speaker-info">
                            <h5>Evelyn Stone</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/7.jpg" alt=""/>
                        </div>
                        
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div className="speaker-info">
                            <h5>Evelyn Stone</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/8.jpg" alt=""/>
                        </div>
                       
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div className="speaker-info">
                            <h5>Susan Hopkins</h5>
                            <p>UX Manager</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                       
                        <div className="speaker-single-thumb">
                            <img src="img/bg-img/9.jpg" alt=""/>
                        </div>
                       
                        <div className="social-info">
                            <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                            <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                            <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                        </div>
                        
                        <div className="speaker-info">
                            <h5>Michael Fowler</h5>
                            <p>Product Design</p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                        <Link className="btn confer-btn-white" to="/speakers">view all Speakers <i className="zmdi zmdi-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="our-schedule-area section-padding-100">
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                    <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Timetable</p>
                        <h4>Schedule Plan</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="schedule-tab">
                        
                        <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="monday-tab" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true">Monday <br/> <span>January 14, 2019</span></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" id="tuesday-tab" data-toggle="tab" href="#step-two" role="tab" aria-controls="step-two" aria-expanded="true">Tuesday <br/> <span>January 15, 2019</span></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" id="wednesday-tab" data-toggle="tab" href="#step-three" role="tab" aria-controls="step-three" aria-expanded="true">Wednesday <br/> <span>January 16, 2019</span></a>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="tab-content" id="conferScheduleTabContent">
                        <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                           
                            <div className="single-tab-content">
                                <div className="row">
                                    <div className="col-12">
                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/10.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Dealing with Difficult People</h6>
                                                    <p>by <span>Gary Armstrong</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2020</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                               
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/11.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Crop Insurance Conference</h6>
                                                    <p>by <span>Amanda Hudson</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                       
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/12.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Capdm Executive Conference</h6>
                                                    <p>by <span>Martha Burke</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                              
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                           
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                  
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-gb-btn">Dowload schedule (Pdf)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
                            
                            <div className="single-tab-content">
                                <div className="row">
                                    <div className="col-12">
                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                            
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/11.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Crop Insurance Conference</h6>
                                                    <p>by <span>Amanda Hudson</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/12.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Capdm Executive Conference</h6>
                                                    <p>by <span>Martha Burke</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                       
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                               
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                               
                                                <div className="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                    
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-gb-btn">Dowload schedule (Pdf)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
                            
                            <div className="single-tab-content">
                                <div className="row">
                                    <div className="col-12">
                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/10.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Dealing with Difficult People</h6>
                                                    <p>by <span>Gary Armstrong</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>

                                        
                                        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
                                            <div className="single-schedule-tumb-info d-flex align-items-center">
                                                
                                                <div className="single-schedule-tumb">
                                                    <img src="img/bg-img/13.jpg" alt=""/>
                                                </div>
                                                
                                                <div className="single-schedule-info">
                                                    <h6>Street Food Convention</h6>
                                                    <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                </div>
                                            </div>
                                            
                                            <div className="schedule-time-place">
                                                <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                            </div>
                                            
                                            <Link to="/blog" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                   
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-gb-btn">Dowload schedule (Pdf)</a>
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
   
    <section className="our-ticket-pricing-table-area bg-img bg-gradient-overlay section-padding-100-0 jarallax" style={{backgroundImage: "url(img/bg-img/14.jpg);"}}>
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Choose a Ticket</p>
                        <h4>Ticket Pricing</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-12 col-lg-4">
                    <div className="single-ticket-pricing-table text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">1 day pass</h6>
                        
                        <div className="ticket-icon">
                            <img src="img/core-img/p1.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>59</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                       
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table active text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">Full pass</h6>
                        
                        <div className="ticket-icon">
                            <img src="img/core-img/p2.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>99</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                        
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">Group pass</h6>
                        
                        <div className="ticket-icon">
                            <img src="img/core-img/p3.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>199</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                        
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="our-sponsor-client-area section-padding-100">
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                    <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Partners &amp; Sponsors</p>
                        <h4>OFFICIAL SPONSOR</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    
                    <div className="our-sponsor-area d-flex flex-wrap">
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-1.png" alt=""/></a>
                        </div>
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-2.png" alt=""/></a>
                        </div>
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-3.png" alt=""/></a>
                        </div>
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-4.png" alt=""/></a>
                        </div>
                       
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-5.png" alt=""/></a>
                        </div>
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-6.png" alt=""/></a>
                        </div>
                       
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-7.png" alt=""/></a>
                        </div>
                        
                        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
                            <a href="#/"><img src="img/core-img/p-8.png" alt=""/></a>
                        </div>
                    </div>
                </div>

                
                <div className="col-12">
                    <div className="our-client-area mt-100 wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="client-area owl-carousel">
                            
                            <div className="single-client-content">
                                
                                <div className="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div className="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div className="single-client-thumb">
                                            <img src="img/bg-img/15.jpg" alt=""/>
                                        </div>
                                        
                                        <div className="client-info">
                                            <h6>Maria Hernandez</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                            </div>

                            
                            <div className="single-client-content">
                               
                                <div className="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div className="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div className="single-client-thumb">
                                            <img src="img/bg-img/16.jpg" alt=""/>
                                        </div>
                                        
                                        <div className="client-info">
                                            <h6>Jacqueline Myers</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                            </div>

                            
                            <div className="single-client-content">
                                
                                <div className="single-client-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                    
                                    <div className="single-client-thumb-info d-flex align-items-center">
                                        
                                        <div className="single-client-thumb">
                                            <img src="img/bg-img/15.jpg" alt=""/>
                                        </div>
                                        
                                        <div className="client-info">
                                            <h6>Maria Hernandez</h6>
                                            <p>UX Manager</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60" style={{backgroundImage: "url(img/bg-img/17.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                   
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Our Blog</p>
                        <h4>Latest news</h4>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="single-blog-thumb">
                            <img src="img/bg-img/18.jpg" alt=""/>
                        </div>
                        <div className="single-blog-text text-center">
                            <Link className="blog-title" to="/blog/details">Street Food Convention</Link>
                            
                            <div className="post-meta">
                                <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i> Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                            <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="single-blog-thumb">
                            <img src="img/bg-img/19.jpg" alt=""/>
                        </div>
                        <div className="single-blog-text text-center">
                            <Link className="blog-title" to="/blog/details">Tedx Moscow Conference</Link>
                           
                            <div className="post-meta">
                                <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                            <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">
                        
                        <div className="single-blog-thumb">
                            <img src="img/bg-img/20.jpg" alt=""/>
                        </div>
                        <div className="single-blog-text text-center">
                            <Link className="blog-title" to="/blog/details">Los Angeles Institute</Link>
                            
                            <div className="post-meta">
                                <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                            </div>
                            <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                            <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    

    
    <section className="contact-our-area section-padding-100-0">
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                    <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Have Question?</p>
                        <h4>Contact us</h4>
                    </div>
                </div>
            </div>

            <div className="row justify-content-between">
                <div className="col-12 col-sm-3">
                    <div className="contact-information mb-100">
                        
                        <div className="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Address:</p>
                            <h6>184 Main Collins Street</h6>
                        </div>
                        
                        <div className="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Phone:</p>
                            <h6>(226) 446 9371</h6>
                        </div>
                        
                        <div className="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Email:</p>
                            <h6>confer@gmail.com</h6>
                        </div>
                        
                        <div className="single-contact-info wow fadeInUp" data-wow-delay="300ms">
                            <p>Website:</p>
                            <h6>www.confer.com</h6>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-8">
                    
                    <div className="contact_from_area mb-100 clearfix wow fadeInUp" data-wow-delay="300ms">
                        <div className="contact_form">
                            <form >
                                <div className="contact_input_area">
                                    <div id="success_fail_info"></div>
                                    <div className="row">
                                        
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="name" id="name" placeholder="Your Name" required/>
                                            </div>
                                        </div>
                                       
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="name" id="name2" placeholder="Last Name" required/>
                                            </div>
                                        </div>
                                      
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control mb-30" name="email" id="email" placeholder="E-mail" required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control mb-30" name="subject" id="subject" placeholder="Your Phhone Number" required/>
                                            </div>
                                        </div>
                                       
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control mb-30" id="message" cols="30" rows="6" placeholder="Your Message *"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12">
                                            <button type="submit" className="btn confer-btn">Send Message <i className="zmdi zmdi-long-arrow-right"></i></button>
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