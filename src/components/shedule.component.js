import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Shedule extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
            <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax" style={{backgroundImage: "url(img/bg-img/27.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="page-title">shedules</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">shedule</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <section className="our-schedule-area bg-white section-padding-100">
        <div className="container">
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
                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                        
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
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
                                           
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
                            
                            <div className="single-tab-content">
                                <div className="row">
                                    <div className="col-12">
                                       
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                        
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                           
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                    
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
                           
                            <div className="single-tab-content">
                                <div className="row">
                                    <div className="col-12">
                                       
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>

                                        
                                        <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                            
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
                                            
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
                                        </div>
                                    </div>

                                   
                                    <div className="col-12">
                                        <div className="more-schedule-btn text-center mt-50 wow fadeInUp" data-wow-delay="300ms">
                                            <a href="#/" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></a>
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

    <div className="map-area">
        <iframe title="title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8521.851236327686!2d-74.6724533513314!3d40.961125464236446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c371b215154515%3A0xb2dc3766c77b480b!2sHopatcong%2C+NJ%2C+USA!5e0!3m2!1sen!2sbd!4v1552471083596" allowfullscreen></iframe>
    </div>
            </>
            )
        }
    }